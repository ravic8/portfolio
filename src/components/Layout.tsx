// src/components/Layout.tsx
import * as React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { AnimatePresence, motion } from "framer-motion";

const linkClass =
  "px-2 py-1 rounded-lg transition hover:bg-neutral-100 aria-[current=page]:text-neutral-900 aria-[current=page]:font-semibold";
const mobileLinkClass =
  "block w-full text-left px-4 py-3 text-base rounded-xl hover:bg-neutral-100 aria-[current=page]:font-semibold";

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  // close menu on route change (hash/location change)
  React.useEffect(() => {
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-neutral-900">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-[#f6f7f9]/80 backdrop-blur supports-[backdrop-filter]:bg-[#f6f7f9]/60 border-b border-neutral-200/60">
        <nav className="container-max flex h-14 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-lg font-bold tracking-wide"
            onClick={() => setOpen(false)}
          >
            {siteConfig.authorName}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-neutral-100"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-neutral-200/70"
            >
              <div className="container-max py-2">
                <nav className="flex flex-col gap-1">
                  <NavLink
                    to="/"
                    end
                    className={mobileLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={mobileLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className={mobileLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={mobileLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={mobileLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </NavLink>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {siteConfig.authorName}
      </footer>
    </div>
  );
}
