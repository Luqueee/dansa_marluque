// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Instalaciones", url: "/instalaciones" },
  { name: "Casal", url: "/services" },
  { name: "Contacto", url: "/contact" },
];

const activities = [
  { name: "HipHop", url: "/" },
  { name: "Funky", url: "/" },
  { name: "Flamenco", url: "/" },
  { name: "HipHop", url: "/" },
  { name: "Dancemusic", url: "/" },
  { name: "Jumping", url: "/" },
  { name: "Fitness", url: "/" },
];

// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      //    { name: "Documentation", url: "/welcome-to-docs/" },
      //    { name: "Tools & Equipment", url: "/products" },
      //    { name: "Construction Services", url: "/services" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/Luqueee/dansa_marluque",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  activities,
  footerLinks,
  socialLinks,
};
