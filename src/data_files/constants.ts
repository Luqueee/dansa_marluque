import ogImageSrc from "@images/social.png";

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
  BlogFoto: "https://cdn.dansamarluque.com/blogfoto.webp",
  FotoGrupo: "https://cdn.dansamarluque.com/fotogrupo.webp",
};
