const ogImageSrc = "https://cdn.dansamarluque.com/icon.png";

export const SITE = {
  title: "Dansa Mar Luque",
  tagline: "Escuela de danza",
  description:
    "Bienvenido a estudio de danza Mar Luque en Sabadell. Ofrecemos una amplia variedad de clases para estudiantes de todas las edades y niveles.",
  description_short:
    "Ofrecemos una amplia variedad de clases para estudiantes de todas las edades y niveles.",
  url: "https://dansamarluque.com",
  author: "Adria Cabrera Luque",
};

export const SEO = {
  title: SITE.title,

  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Para todas las edades y niveles`,
  description:
    "Bienvenido a estudio de danza Mar Luque en Sabadell. Ofrecemos una amplia variedad de clases para estudiantes de todas las edades y niveles.",
  image: ogImageSrc,
};

export const Images = {
  topfoto: "https://cdn.dansamarluque.com/topfoto.webp",
  XaviImage: "https://cdn.dansamarluque.com/xavi.webp",
  FotoGrupo: "https://cdn.dansamarluque.com/blogfotoinicio.webp",
  BlogFoto: "https://cdn.dansamarluque.com/fotogrupo.webp",
  sala1: "https://cdn.dansamarluque.com/sala1.webp",
  sala2: "https://cdn.dansamarluque.com/sala2.webp",
  sala3: "https://cdn.dansamarluque.com/sala3.webp",
  vestuario: "https://cdn.dansamarluque.com/vestuario.webp",
  casalfototop: "https://cdn.dansamarluque.com/casalfoto.webp",
  bannerindexcasal: "https://cdn.dansamarluque.com/bannerindexcasal.webp",
  fotocasalindex: "https://cdn.dansamarluque.com/fotoindexcasal.webp",
  fotojanethcsaal: "https://cdn.dansamarluque.com/fotojanethcasal.webp",
  fotocasalpagina: "https://cdn.dansamarluque.com/fotocasal.png",
  gallerycasal: [
    "https://cdn.dansamarluque.com/fotocasal1.jpg",
    "https://cdn.dansamarluque.com/fotocasal2.jpg",
    "https://cdn.dansamarluque.com/fotocasal3.jpg",
    "https://cdn.dansamarluque.com/fotocasal4.jpg",
    "https://cdn.dansamarluque.com/fotocasal5.jpg",
    "https://cdn.dansamarluque.com/fotocasal6.jpg",
  ],
};
