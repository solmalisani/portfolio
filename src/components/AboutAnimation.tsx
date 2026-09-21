"use client"

// https://21st.dev/community/ascii/editor?from=6e1f578b-7693-4fce-946f-928bbaf6cb35
export function Press({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src="/images/Portait.mp4"
      poster={"/images/Portrait.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"datafobik — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
