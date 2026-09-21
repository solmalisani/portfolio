import { Outlet } from "react-router"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function RootLayout() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between">
      {/* Header / Nav fixed across all routes */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <Nav />
      </header>

      {/* Dynamic Route Content */}
      <main className="flex-1 w-full min-h-screen">
        <Outlet />
      </main>

      {/* Footer fixed across all routes */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  )
}
