import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ContactForm from "./Contact"
import { Component as PhotoLoopSlider } from "@/components/photo-loop-infinite-slider"
import AboutSection from './About'

export default function DemoOne() {
  return (
    <div className="relative w-full min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <Nav />
      </header>

      {/* HOME PAGE */}
      <main id="home" className="flex-1 flex items-center justify-center min-h-screen">
        <PhotoLoopSlider />
      </main>

      {/* ABOUT PAGE */}
      <AboutSection />

      {/* CONTACT PAGE */}
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

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  )
}
