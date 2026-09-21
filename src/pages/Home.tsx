import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import { Component as PhotoLoopSlider } from "@/components/ui/photo-loop-infinite-slider"
import { Press } from "@/components/About"

export default function DemoOne() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <Nav />
      </header>

      <main id="home" className="flex-1 flex items-center justify-center min-h-screen">
        <PhotoLoopSlider />
      </main>

      <section
        id="contact"
        className="min-h-screen w-full flex flex-col justify-center items-center px-8 pt-24 pb-16 relative z-10"
        style={{
          backgroundColor: "var(--background)",
          borderTop: "1px solid var(--border)"
        }}
      >
        <ContactForm />
      </section>

      <section
        id="about"
        className="min-h-screen w-full flex flex-col justify-center items-center px-8 pt-24 pb-16 relative z-10"
        style={{
          backgroundColor: "var(--background)",
          borderTop: "1px solid var(--border)"
        }}
      >
      <Press
        // src="/images/Foto.jpg"
        // alt="ASCII background"
        className="absolute inset-0 h-full w-full pointer-events-none  object-cover rounded-2xl"
      />
      </section>

      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  )
}
