import { siteConfig } from "config/siteConfig";
import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `hover:text-slate-900 ${isActive ? "text-slate-900" : "text-slate-700"}`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <header className="sticky top-0 z-50 bg-[#f8fafc]">
        <nav className="container-max flex h-16 items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-wide">
            {siteConfig.AuthorName}
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[15px] md:text-[16px] font-medium">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="py-10 text-center text-slate-500 text-sm bg-[#f8fafc]">
        © {new Date().getFullYear()} {siteConfig.AuthorName}
      </footer>
    </div>
  );
}
