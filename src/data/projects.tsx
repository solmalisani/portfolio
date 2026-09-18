import fs from 'fs';
import path from 'path';

export function getBbfwImages(name: string): string[] {
  const dirPath = path.join(process.cwd(), `public/images/${name}`);
  const files = fs.readdirSync(dirPath);

  return files
    .filter((file) => file !== 'portada.webp') // Exclude portada.webp
    .map((file) => `/images/${name}/${file}`);
}

export type Project = {
    id: string
    slug: string
    title: string
    category: string
    year: string
    description: string
    tags: string[]
    image: string
    images: string[]
  }

  export const projects: Project[] = [
    {
      id: "01",
      slug: "ritme-sacre",
      title: "Ritme Sacré",
      category: "Bridal Collection",
      year: "2026",
      description:
        "Winner of Stephane Rolland's student design contest. Presented the final garment on the official runway during Barcelona Bridal Fashion Week.",
      tags: ["Bridal", "Haute Couture", "BBFW"],
      image: "/images/BBFW/portada.webp",
      images: [
        "/images/BBFW/0.webp",
        "/images/BBFW/1.webp",
        "/images/BBFW/2.webp",
        "/images/BBFW/4.webp",
        "/images/BBFW/5.webp",
        "/images/BBFW/7.webp",
        "/images/BBFW/8.webp",
        "/images/BBFW/9.webp",
        "/images/BBFW/10.webp",
        "/images/BBFW/11.webp",
        "/images/BBFW/12.webp",
        "/images/BBFW/13.webp",
        "/images/BBFW/14.webp",
        "/images/BBFW/15.webp",
        "/images/BBFW/16.webp",
        "/images/BBFW/17.webp",
        "/images/BBFW/18.webp",
        "/images/BBFW/19.webp",
      ],
    },
    {
      id: "02",
      slug: "iris-van-herpen",
      title: "Iris Van Herpen",
      category: "Internship",
      year: "2026",
      description:
        "Constructed a custom Haute Couture dress for the Paris Couture Week 2026 runway, executing the entire production process from pattern making, machine sewing, and hand stitching.",
      tags: ["Haute Couture", "IVH", "PFW26"],
      image: "/images/IVH/portada.webp",
      images: [
        "/images/IVH/1.webp",
        "/images/IVH/2.webp",
        "/images/IVH/3.webp",
        "/images/IVH/4.webp",
        "/images/IVH/5.webp",
        "/images/IVH/6.webp",
      ],
    },
    {
      id: "03",
      slug: "glitched-urbanism",
      title: "Glitched Urbanism",
      category: "Capsule Collection",
      year: "2026",
      description:
        "9-look capsule featuring engineered digital prints created from manual street scans across Barcelona, Marrakech, and Amsterdam, fully developed from initial tech sheets to final CAD flats.",
      tags: ["Streetwear", "Prints", "Scans"],
      image: "/images/GlitchedUrbanism/portada.webp",
      images: [
        "/images/GlitchedUrbanism/1.webp",
        "/images/GlitchedUrbanism/2.webp",
        "/images/GlitchedUrbanism/3.webp",
        "/images/GlitchedUrbanism/4.webp",
        "/images/GlitchedUrbanism/5.webp",
        "/images/GlitchedUrbanism/6.webp",
        "/images/GlitchedUrbanism/7.webp",
        "/images/GlitchedUrbanism/9.webp",
        "/images/GlitchedUrbanism/10.webp",
        "/images/GlitchedUrbanism/11.webp",
        "/images/GlitchedUrbanism/12.webp",
      ],
    },
    {
      id: "04",
      slug: "rompiendo-el-circulo",
      title: "Rompiendo el circulo",
      category: "Womenswear Collection",
      year: "2025",
      description:
        "10-look womenswear collection that translates the silent struggle and emotional weight of my family's women into bold structural forms, utilizing rigid denim, heavy knits, and sharp outerwear to claim presence and autonomy.",
      tags: ["Womenswear", "Knitwear", "Casualwear"],
      image: "/images/RompiendoElCirculo/portada.webp",
      images: [
        "/images/RompiendoElCirculo/1.webp",
        "/images/RompiendoElCirculo/2.webp",
        "/images/RompiendoElCirculo/3.webp",
        "/images/RompiendoElCirculo/4.webp",
        "/images/RompiendoElCirculo/5.webp",
        "/images/RompiendoElCirculo/6.webp",
        "/images/RompiendoElCirculo/7.webp",
        "/images/RompiendoElCirculo/8.webp",
        "/images/RompiendoElCirculo/9.webp",
        "/images/RompiendoElCirculo/10.webp",
        "/images/RompiendoElCirculo/11.webp",
        "/images/RompiendoElCirculo/12.webp",
        "/images/RompiendoElCirculo/13.webp",
        "/images/RompiendoElCirculo/14.webp",
        "/images/RompiendoElCirculo/15.webp",
        "/images/RompiendoElCirculo/16.webp",
        "/images/RompiendoElCirculo/17.webp",
        "/images/RompiendoElCirculo/18.webp",
        "/images/RompiendoElCirculo/20.webp",
        "/images/RompiendoElCirculo/21.webp",
        "/images/RompiendoElCirculo/22.webp",
        "/images/RompiendoElCirculo/23.webp",
      ],
    },
  ]
