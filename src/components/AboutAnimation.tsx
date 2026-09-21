"use client"

// AsciiArt — "datafobik", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
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
