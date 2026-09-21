import { Link, useLocation } from "react-router"

export default function Nav() {
  const location = useLocation()

  const navItems = [
    { label: "work", path: "/" },
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      {/* Logo Link */}
      <Link
        to="/"
        className="font-display text-sm tracking-widest uppercase cursor-pointer"
        style={{ color: "var(--foreground)", textDecoration: "none" }}
      >
        12/twelve
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.label}
              to={item.path}
              className="text-xs tracking-widest uppercase transition-colors duration-200 cursor-pointer"
              style={{
                color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                textDecoration: "none",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
