import { Outlet, useLocation } from "react-router"
import { useState, useEffect } from "react"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout() {
  const location = useLocation()
  const [isDesktop, setIsDesktop] = useState(false)

  // Track viewport width (md breakpoint = 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Home: always fixed footer
  // About: fixed ONLY on desktop, static flow on mobile
  const isFixedFooter =
    location.pathname === "/" || (location.pathname === "/about" && isDesktop)

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between">
      {/* Header / Nav fixed across all routes */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <Nav />
      </header>

      {/* Dynamic Route Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer conditionally switches between fixed and relative based on route & screen size */}
      <footer
        className={
          isFixedFooter
            ? "fixed bottom-0 left-0 right-0 z-50 pointer-events-auto"
            : "w-full relative z-10"
        }
      >
        <Footer />
      </footer>

      <Analytics />
    </div>
  )
}
