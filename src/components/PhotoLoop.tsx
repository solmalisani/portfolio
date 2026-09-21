import * as React from "react";
import "./photo-loop.css";

interface ProjectData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: "Ritme Sacré",
    image: "/images/BBFW/portada2.webp",
    category: "Bridal Collection",
    year: "2026",
    description: "Winner of Stephane Rolland's student design contest. Presented the final garment on the official runway during Barcelona Bridal Fashion Week.",
  },
  {
    title: "Iris Van Herpen",
    image: "/images/IVH/portada2.webp",
    category: "Intership",
    year: "2026",
    description: "Constructed a custom Haute Couture dress for the Paris Couture Week 2026 runway, executing the entire production process from pattern making, machine sewing, and hand stitching.",
  },
  {
    title: "Glitched Urbanism",
    image: "/images/GlitchedUrbanism/portada2.webp",
    category: "Capsule collection",
    year: "2026",
    description: "9-look capsule featuring engineered digital prints created from manual street scans across Barcelona, Marrakech, and Amsterdam, fully developed from initial tech sheets to final CAD flats.",
  },
  {
    title: "Rompiendo el circulo",
    image: "/images/RompiendoElCirculo/portada2.webp",
    category: "Womenswear collection",
    year: "2025",
    description: "10-look womenswear collection that translates the silent struggle and emotional weight of my family's women into bold structural forms, utilizing rigid denim, heavy knits, and sharp outerwear to claim presence and autonomy.",
  },
];

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

// Utility functions
const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const getProjectData = (index: number) => {
  const i =
    ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) %
    PROJECT_DATA.length;
  return PROJECT_DATA[i];
};

const getProjectNumber = (index: number) => {
  return (
    ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) %
      PROJECT_DATA.length +
    1
  )
    .toString()
    .padStart(2, "0");
};

export function PhotoSlider() {
  const [visibleRange, setVisibleRange] = React.useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  // Refs for state that changes frequently (animation loop)
  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0, // Will be set on mount
    minimapHeight: 340, // Fixed height from CSS
  });

  // Refs to store DOM elements
  const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const requestRef = React.useRef<number>();

  // Helper to update parallax for a single item
  const updateParallax = (
    img: HTMLImageElement | null,
    scroll: number,
    index: number,
    height: number
  ) => {
    if (!img) return;
    // We can store 'current' parallax value on the element dataset or a separate map if we want smooth lerping
    // for the image inside the container as well.
    // The original code did: `current = lerp(current, target, 0.1)` inside a closure.
    // To keep it simple and stateless for the image inner lerp, we might just calculate it directly
    // or use a separate map for image states if strictly needed.
    // Let's try direct calculation first, or use a weakmap/map for image states.

    // Actually, let's implement the closure-like behavior by storing image states
    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = "0";
    }

    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);

    // Optimization: only update if changed significantly
    if (Math.abs(current - target) > 0.01) {
        img.style.transform = `translateY(${current}px) scale(1)`;
        img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min(
      (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY =
      s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = {
      time: Date.now(),
      y: s.targetY,
      target: target,
    };
  };

  const updatePositions = () => {
    const s = state.current;
    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

    // Update Projects
    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      updateParallax(img, s.currentY, index, s.projectHeight);
    });

    // Update Minimap Images
    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      if (img) {
          // Minimap parallax uses minimapHeight
          updateParallax(img, minimapY, index, s.minimapHeight);
      }
    });

    // Update Info
    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
    });
  };

  const animate = () => {
    const s = state.current;
    const now = Date.now();

    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint =
        -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }

    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }

    updatePositions();

    // Check visible range and update if needed
    // We calculate "current" index based on scroll
    const currentIndex = Math.round(-s.targetY / s.projectHeight);
    const min = currentIndex - CONFIG.BUFFER_SIZE;
    const max = currentIndex + CONFIG.BUFFER_SIZE;

    // We use a ref to track the last committed range to avoid setting state in the loop repeatedly
    // But setting state inside rAF can be tricky if not careful.
    // Ideally we check if it CHANGED.

    // Accessing state from hook closure is stale? No, we use Functional update or Ref for current range.
    // Let's use a ref for the "rendered" range to compare.
    // But we need to trigger a render. So we simply check if derived min/max differs from what we *think* is rendered.
    // The problem is `visibleRange` from state is constant in this closure.
    // So we'll trust that the effect re-runs or we store "renderedRange" in a ref.
  };

  // We need the animation loop to be able to trigger a state update.
  // But we don't want to create a new loop function on every render.
  // So we use a ref for the range checking logic.

  const renderedRange = React.useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE });

  const animationLoop = () => {
     animate();

     const s = state.current;
     const currentIndex = Math.round(-s.targetY / s.projectHeight);
     const min = currentIndex - CONFIG.BUFFER_SIZE;
     const max = currentIndex + CONFIG.BUFFER_SIZE;

     if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
         renderedRange.current = { min, max };
         setVisibleRange({ min, max });
     }

     requestRef.current = requestAnimationFrame(animationLoop);
  };

  React.useEffect(() => {
    state.current.projectHeight = window.innerHeight;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const s = state.current;
      s.isSnapping = false;
      s.lastScrollTime = Date.now();
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY
      );
      s.targetY -= delta;
    };

    const onTouchStart = (e: TouchEvent) => {
        const s = state.current;
        s.isDragging = true;
        s.isSnapping = false;
        s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
        s.lastScrollTime = Date.now();
    }

    const onTouchMove = (e: TouchEvent) => {
        const s = state.current;
        if (!s.isDragging) return;
        s.targetY =
            s.dragStart.scrollY +
            (e.touches[0].clientY - s.dragStart.y) * 1.5;
        s.lastScrollTime = Date.now();
    }

    const onTouchEnd = () => {
        state.current.isDragging = false;
    }

    const onResize = () => {
        state.current.projectHeight = window.innerHeight;
        // Sync container height to match JS logic exactly
        const container = document.querySelector('.parallax-container') as HTMLElement;
        if (container) {
            container.style.height = `${window.innerHeight}px`;
        }
        // updatePositions is called in loop
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", onResize);

    // Initial size sync
    onResize();

    // Start Loop
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Generate range of indices
  const indices = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  return (
    <div className="parallax-container">
      <ul className="project-list">
        {indices.map((i) => {
          const data = getProjectData(i);
          return (
            <div
              key={i}
              className="project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.title} />
            </div>
          );
        })}
      </ul>

      <div className="minimap">
        <div className="minimap-wrapper">
          <div className="minimap-img-preview">
            {indices.map((i) => {
              const data = getProjectData(i);
              return (
                <div
                  key={i}
                  className="minimap-img-item"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el);
                    else minimapRef.current.delete(i);
                  }}
                >
                  <img src={data.image} alt={data.title} />
                </div>
              );
            })}
          </div>
          <div className="minimap-info-list">
            {indices.map((i) => {
              const data = getProjectData(i);
              const num = getProjectNumber(i);
              return (
                <div
                  key={i}
                  className="minimap-item-info"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el);
                    else infoRef.current.delete(i);
                  }}
                >
                  <div>
                    <p className="minimap-title">{num} {data.title}</p>
                    <p className="minimap-category">{data.category} - {data.year}</p>
                    <p className="minimap-description">{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
