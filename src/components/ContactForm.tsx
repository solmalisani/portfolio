import React from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID (e.g. "xayvzwpo")
  const [state, handleSubmit] = useForm("mkjgjjkg")

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 max-w-md my-auto">
        <h2 className="text-3xl font-bold font-display mb-2">Thank You!</h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Your message has been sent successfully. I’ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-sm w-full max-w-md my-auto"
    >
      <h2
        className="text-3xl md:text-5xl font-bold pb-2 text-center font-display tracking-tight"
        style={{ color: "var(--foreground)" }}
      >
        Let’s Get In Touch.
      </h2>

      <p
        className="text-sm pb-8 text-center"
        style={{ color: "var(--muted-foreground)" }}
      >
        Or reach out directly at{" "}
        <a
          href="mailto:solmalisanidesign@gmail.com"
          className="hover:underline font-medium transition-colors"
          style={{ color: "var(--accent)" }}
        >
          solmalisanidesign@gmail.com
        </a>
      </p>

      <div className="w-full flex flex-col gap-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block font-medium mb-1.5 text-xs uppercase tracking-wider"
            style={{ color: "var(--muted-foreground)" }}
          >
            Full Name
          </label>
          <div
            className="flex items-center h-11 px-3 border rounded-full transition-all overflow-hidden focus-within:ring-2"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card, transparent)",
            }}
          >
            <input
              id="name"
              name="name"
              type="text"
              className="h-full px-3 w-full outline-none bg-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block font-medium mb-1.5 text-xs uppercase tracking-wider"
            style={{ color: "var(--muted-foreground)" }}
          >
            Email Address
          </label>
          <div
            className="flex items-center h-11 px-3 border rounded-full transition-all overflow-hidden focus-within:ring-2"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card, transparent)",
            }}
          >
            <input
              id="email"
              name="email"
              type="email"
              className="h-full px-3 w-full outline-none bg-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-medium mb-1.5 text-xs uppercase tracking-wider"
            style={{ color: "var(--muted-foreground)" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-3 bg-transparent border rounded-xl resize-none outline-none focus:ring-2 transition-all"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card, transparent)",
            }}
            placeholder="Enter your message"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="flex items-center justify-center gap-2 mt-2 py-3 px-6 w-full rounded-full transition-opacity duration-200 uppercase tracking-widest text-xs font-semibold disabled:opacity-50"
          style={{
            backgroundColor: "var(--foreground)",
            color: "var(--background)",
            fontFamily: "'Courier Prime', monospace",
          }}
        >
          {state.submitting ? "Sending..." : "Send"}
          <svg
            width="18"
            height="18"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
