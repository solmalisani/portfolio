import React, { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form Submitted:", formData)
  }

  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-sm w-full max-w-lg"
        style={{ color: "var(--foreground)" }}
      >
        <p
          className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider mb-2"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-foreground, #ffffff)",
            fontFamily: "'Courier Prime', monospace",
          }}
        >
          Contact Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-bold py-2 text-center font-display tracking-tight"
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

        <div className="w-full max-w-md flex flex-col gap-4">
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                  fill="currentColor"
                  style={{ color: "var(--muted-foreground)" }}
                />
              </svg>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-full px-3 w-full outline-none bg-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email-address"
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                  fill="currentColor"
                  style={{ color: "var(--muted-foreground)" }}
                />
              </svg>
              <input
                id="email-address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-full px-3 w-full outline-none bg-transparent"
                placeholder="Enter your email address"
                required
              />
            </div>
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
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 bg-transparent border rounded-xl resize-none outline-none focus:ring-2 transition-all"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card, transparent)",
              }}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 mt-2 py-3 px-6 w-full rounded-full transition-opacity duration-200 uppercase tracking-widest text-xs font-semibold"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground, #ffffff)",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            Submit Form
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
    </section>
  )
}
