import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";

// --- Lazy-loaded pages (unique names to avoid collisions) ---
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/About"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ProjectDetailsPage = lazy(() => import("./pages/ProjectDetails"));
const BlogIndex = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactPage = lazy(() => import("./pages/Contact"));

// --- Scroll to top on route change ---
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

// --- Minimal error boundary ---
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: unknown) {
    console.error("App error boundary:", err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container-max py-10">
          <div className="card">
            <h1 className="text-xl font-semibold text-red-600">
              Something went wrong.
            </h1>
            <p className="mt-2 text-slate-700">
              Please refresh the page. If it keeps happening, check the console logs.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Simple skeleton fallback for lazy routes ---
function RouteFallback() {
  return (
    <div className="container-max py-10">
      <div className="animate-pulse space-y-4">
        <div className="h-7 w-40 rounded bg-neutral-200" />
        <div className="h-5 w-3/4 rounded bg-neutral-200" />
        <div className="h-5 w-2/3 rounded bg-neutral-200" />
        <div className="h-64 w-full rounded-2xl bg-neutral-200" />
      </div>
    </div>
  );
}

function AppInner() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<RouteFallback />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <div className="container-max py-10">
                      <div className="card">
                        <h1 className="text-2xl font-bold text-neutral-900">
                          404 — Page not found
                        </h1>
                        <p className="mt-2 text-neutral-700">
                          The page you’re looking for doesn’t exist.
                        </p>
                        <Link to="/" className="mt-4 inline-block btn btn-primary">
                          Go Home
                        </Link>
                      </div>
                    </div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
