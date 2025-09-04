import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `hover:text-emerald-600 ${isActive ? "text-emerald-700" : "text-neutral-800"}`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {/* Header: same bg as body; reduced spacing */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/90 backdrop-blur">
        <nav className="container flex h-16 md:h-18 items-center justify-between">
          <Link to="/" className="text-[18px] md:text-2xl font-bold tracking-wide">
            Inglorious0211
          </Link>
          <div className="flex items-center gap-6 md:gap-8 text-[15px] md:text-[17px] font-medium">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="container py-10 text-base text-neutral-500">
          © {new Date().getFullYear()} Inglorious0211
        </div>
      </footer>
    </div>
  );
}
