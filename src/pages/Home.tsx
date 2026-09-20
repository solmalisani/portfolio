import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import { Component as PhotoLoopSlider } from "@/components/ui/photo-loop-infinite-slider"

export default function DemoOne() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <Nav />
      </header>

      <main className="w-full h-full">
        <PhotoLoopSlider />
      </main>

      <section
        id="contact"
        className="py-12"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <ContactForm />
      </section>

      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  )
}
