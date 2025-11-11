// src/App.tsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";
import { siteConfig } from "./config/siteConfig";

const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <>
      <title>{siteConfig.name}</title>
      <meta name="description" content={siteConfig.description} />
      <link rel="icon" href="/generative.png" />
      <link rel="apple-touch-icon" href="/generative.png" />

      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="container-max py-10">Loading…</div>}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<div className="container-max py-10">Not found</div>} />
              </Routes>
            </PageTransition>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}
