export const images = {
  logo: "/images/logo/logo.png",
  hero: "/images/hero/hero-mansion.jpg",
  mansion: "/images/mansion/mansion-aerial.jpg",
  fleet: "/images/fleet/corvette-gwagon.jpg",
  corvette: "/images/corvette/corvette-front.jpg",
  gwagon: "/images/gwagon/gwagon-front.jpg",
  lifestyle: "/images/model/model-country.jpg",
  boat: "/images/boat/boat-experience.png",
  horses: "/images/horses/horses-experience.png",
  birds: "/images/birds/birds-experience.png",
  dresses: "/images/dresses/dresses-experience.png",
} as const;

export type GalleryItem = {
  src: string;
  alt: string;
  aspect: "tall" | "wide" | "square";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/mansion-aerial.jpg",
    alt: "Aerial view of the private estate",
    aspect: "wide",
  },
  {
    src: "/images/gallery/fleet-driveway.jpg",
    alt: "Luxury fleet at the mansion driveway",
    aspect: "tall",
  },
  {
    src: "/images/gallery/corvette-front.jpg",
    alt: "Corvette at golden hour",
    aspect: "square",
  },
  {
    src: "/images/boat/boat-experience.png",
    alt: "Private yacht experience",
    aspect: "tall",
  },
  {
    src: "/images/gallery/gwagon-front.jpg",
    alt: "Mercedes G-Wagon",
    aspect: "wide",
  },
  {
    src: "/images/horses/horses-experience.png",
    alt: "Equestrian portrait session",
    aspect: "square",
  },
  {
    src: "/images/dresses/dresses-experience.png",
    alt: "Luxury couture collection",
    aspect: "tall",
  },
  {
    src: "/images/birds/birds-experience.png",
    alt: "Exotic bird encounter",
    aspect: "square",
  },
];
