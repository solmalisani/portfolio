import { Outlet, useLocation } from "react-router"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout() {
  const location = useLocation()

  // Routes where the footer should be fixed at the bottom of the screen
  const isFixedFooterRoute = location.pathname === "/" || location.pathname === "/about"

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

      {/* Footer conditionally switches between fixed position and natural flow */}
      <footer
        className={
          isFixedFooterRoute
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
