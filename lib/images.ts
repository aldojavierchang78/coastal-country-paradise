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
  layout: "hero" | "tall-left" | "wide-right" | "portrait" | "landscape";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/mansion-aerial.jpg",
    alt: "The estate from above",
    layout: "hero",
  },
  {
    src: "/images/gallery/fleet-driveway.jpg",
    alt: "Fleet at the driveway",
    layout: "tall-left",
  },
  {
    src: "/images/gallery/corvette-front.jpg",
    alt: "Corvette at golden hour",
    layout: "wide-right",
  },
  {
    src: "/images/horses/horses-experience.png",
    alt: "Equestrian portrait",
    layout: "portrait",
  },
  {
    src: "/images/dresses/dresses-experience.png",
    alt: "Couture collection",
    layout: "landscape",
  },
  {
    src: "/images/birds/birds-experience.png",
    alt: "Exotic birds",
    layout: "portrait",
  },
];
