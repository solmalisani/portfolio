import { Link, useNavigate, useLocation } from "react-router"

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"

  const handleNavClick = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/", { state: { scrollTo: id } })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        // borderBottom: "1px solid var(--border)",
        // backgroundColor: "var(--background)",
        // opacity: "50%",
      }}
    >
      <Link
        to="/"
        className="font-display text-sm tracking-widest uppercase"
        style={{ color: "var(--foreground)", textDecoration: "none", opacity: "100%" }}
      >
        12/twelve
      </Link>
      <div className="flex gap-8">
        {["work", "about", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="text-xs tracking-widest uppercase transition-colors duration-200"
            style={{
              color: "var(--muted-foreground)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              opacity: "100%"
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = "var(--accent)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color =
                "var(--muted-foreground)"
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  )
}
