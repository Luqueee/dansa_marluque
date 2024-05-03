> [!IMPORTANT]
> This webpage is currently in development.

<h1 align='center'> Dansa Mar Luque Official Repository</h1>

![Foto de dansa mar luque](https://raw.githubusercontent.com/Luqueee/dansa_marluque/main/public/fotologo.jpg)

Welcome to the official repository of Dansa Mar Luque, there you can see the font source of the page.

**[View Live Demo](https://dansamarluque.com/)**

<details open='True'>
 <summary> <h2>Table of Contents</h2></summary>
 
  * [Recognitions](#recognitions)
  * [Getting Started](#getting-started)
    + [Installation](#installation)
    + [Development Commands](#development-commands)
  * [Deployment](#deployment)
    + [Building Your Site](#building-your-site)
    + [Deploying to Vercel](#deploying-to-vercel)
  * [Project Structure](#project-structure)
  * [Static Assets and Public Resources](#static-assets-and-public-resources)
  * [Integrations and Enhancements](#integrations-and-enhancements)
    + [Starlight Documentation](#starlight-documentation)
    + [Lenis for Smooth Scrolling](#lenis-for-smooth-scrolling)
    + [GSAP Integration](#gsap-integration)
    + [Hiding Scrollbar](#hiding-scrollbar)
    + [Astro Integrations](#astro-integrations)
    + [Flexibility with Integrations](#flexibility-with-integrations)
  * [Tools and Technologies](#tools-and-technologies)
    + [Preline UI](#preline-ui)
    + [Tailwind CSS](#tailwind-css)
    + [Deployment and Security](#deployment-and-security)
    + [HTML Minification](#html-minification)
  * [Contributing](#contributing)
  * [License](#license)
</details>

## Recognitions
We used the official **[Screwfast theme](https://github.com/mearashadowfax/ScrewFast)** for the base structure of the page. However we made the respective recognitions in the footer.

### Planned Improvements
- Currently, there are no planned improvements. We'll update this section as plans develop.

### Bug Fixes
- Currently, there are no known bugs. If you encounter any issues, please report them on our [issues page](https://github.com/Luqueee/dansa_marluque/issues).

## Getting Started

This guide will provide you with the necessary steps to set up and familiarize yourself with the Astro project on your local development machine.

### Installation

Start by installing the project dependencies. Open your terminal, navigate to the project's root directory, and execute:

```bash
npm install
```

This command will install all the necessary dependencies defined in the `package.json` file.

### Development Commands

With dependencies installed, you can utilize the following npm scripts to manage your project's development lifecycle:

- `npm run dev`: Starts a local development server with hot reloading enabled.
- `npm run preview`: Serves your build output locally for preview before deployment.
- `npm run build`: Bundles your site into static files for production.

For detailed help with Astro CLI commands, visit [Astro's documentation](https://docs.astro.build/en/reference/cli-reference/).

## Deployment

### Building Your Site

Before deployment, you need to create a production build:

```bash
npm run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

### Deploying to Vercel

Click the button below to start deploying your project on Vercel:  

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

## Project Structure

Dansa Mar Luque organizes modular components, content, and layouts to streamline development and content management.

```md

src/
├── components/           # Reusable components
│   ├── Meta.astro        # Meta component for SEO
│   ├── sections/         # Components for various sections of the website
│   ├── ThemeIcon.astro   # Component for toggling light/dark themes
│   └── ui/               # UI components categorized by functionality
├── content/              # Markdown files for blog posts, insights, products, and site configuration
│   ├── blog/
│   ├── docs/           
│   ├── insights/         
│   ├── products/         
│   └── config.ts         # Contains site-wide configuration options
├── data_files/           # Strings stored as JSON files
├── images/               # Static image assets for use across the website
├── layouts/              # Components defining layout templates
│   └── MainLayout.astro  # The main wrapping layout for all pages
├── pages/                # Astro files representing individual pages and website sections
│   ├── 404.astro         # Custom 404 page
│   ├── blog/   
│   ├── fr/               # Localized content
│   ├── contact.astro     
│   ├── index.astro       # The landing/home page
│   ├── insights/         
│   ├── products/         
│   ├── robots.txt.ts     # Dynamically generates robots.txt
│   └── services.astro
├── styles/               # CSS styles
└── utils/                # Shared utility functions and helpers

```

## Static Assets and Public Resources
```md

public/
└── scripts/
    └── vendor/
        ├── gsap/ # Animations powered by GSAP (GreenSock Animation Platform)
        │   └── gsap.min.js 
        ├── lenis/ # Lenis script for smooth scrolling effects
        │   └── lenis.js
        └── preline/   # Preline UI plugins
            ├── accordion/
            ├── collapse/
            ├── dropdown/
            ├── overlay/
            └── tabs/


```



### Starlight Documentation

Dansa Mar Luque is now equipped with the Starlight, which is designed to elevate the user's experience with documentation. This modern and elegant theme comes with a suite of features to make the content more accessible and pleasant to navigate.

Key Features:

- **Site Navigation and Search**: Navigate through the documentation with ease using intuitive sidebar and built-in search functionality.
- **Internationalization**: Cater to a global audience with the ability to switch languages, making documentation accessible to everyone, everywhere.
- **SEO Friendly**: Optimized for search engines to help users quickly find the information they need.
- **Code Highlighting and Dark Mode**: Enhances code readability with syntax highlighting, and offers a dark mode to reduce eye strain for users.
- **Mobile Responsive Design**: Whether you're on a phone, tablet, or desktop, the documentation adapts to your screen size for optimal readability.

With Starlight, you gain access to a wealth of powerful features and integrations, along with extensive customization options to fit your needs.

> [!NOTE]
> Dive into the Starlight's comprehensive feature list and learn how it can streamline your development process by visiting the theme's [documentation site](https://starlight.astro.build/).
> 
### Lenis for Smooth Scrolling

Experience buttery smooth scrolling with [Lenis](https://lenis.studiofreight.com/). We've integrated Lenis to provide an enhanced scrolling experience that's both fluid and responsive.

Here's how we set up Lenis in `src/layouts/MainLayout.astro`:

```astro
<script is:inline src="/scripts/vendor/lenis/lenis.js"></script>
<script is:inline>
  // Script to handle Lenis library settings for smooth scrolling
  const lenis = new Lenis({
    smooth: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time); // Update Lenis on each animation frame
    requestAnimationFrame(raf); // Continuously invoke the raf function at refresh rate
  }
  requestAnimationFrame(raf); // Start the loop
</script>
<style>
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
```

Please note that smooth scrolling can affect accessibility and performance on some devices, so be sure to test it comprehensively across different environments.

> [!NOTE]
> If you would like to remove Lenis and return to the browser's default scrolling behavior, simply comment out or delete these lines from the `MainLayout.astro` file.

### GSAP Integration

 For individual product pages, [GSAP](https://gsap.com/) has been integrated to add engaging animations that execute as soon as the product page loads. You can find and modify the GSAP configuration in the script sections of the product page file located at `src/pages/products/[...slug].astro`:

```astro
<script is:inline src="/scripts/vendor/gsap/gsap.min.js"></script>
<script>
  window.addEventListener("load", (event) => {
    if (window.gsap) {
      const gsap = window.gsap;
      // Initialize GSAP animations...
    }
  });
</script>
```

**Customizing Animations:**

Please tailor the GSAP animations within this script to fit your project's look and feel. The provided example is a starting point, representing how to leverage GSAP for immediate visual impact as a product page loads.

**Modifying or Removing Animations:**

- To modify an animation, update the properties and parameters within the `gsap.from()` method, or add new GSAP animation calls as required.
- Should GSAP not be needed, or if you prefer a different animation method, simply remove the aforementioned script segment.

> [!NOTE]
> We've chosen to keep the integration lean and focused, but GSAP's comprehensive documentation can be referred to for more complex animations: [GSAP Documentation](https://gsap.com/docs/v3/).

### Hiding Scrollbar

To achieve a cleaner and more spacious design, the default scrollbar has been visually removed. While this choice fits the aesthetic goals of the project, it's important to consider that hiding scrollbars can sometimes affect accessibility and user experience. We recommend evaluating this design decision within the context of your user base and their needs.

For those who prefer custom-styled scrollbars, we suggest using the [tailwind-scrollbar](https://adoxography.github.io/tailwind-scrollbar/) plugin, which adds Tailwind CSS utilities for scrollbar styles, allowing for more controlled customization that can also meet accessibility standards.

> [!NOTE]
> If you wish to return the default scrollbar, you can comment out or remove the following CSS from `src/layouts/MainLayout.astro`:

```html
<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
```

Additionally, update the `<html>` tag to remove the `scrollbar-hide` class, resulting in:

```html
<html lang="en" class="scroll-pt-16">
```


### Astro Integrations

Maximize your website's efficiency with these built-in Astro integrations:

- [Astro Compressor](https://github.com/sondr3/astro-compressor#readme): Automatically compresses Astro-generated site using gzip or brotli, ensuring faster load times.
Configure the compressor in `astro.config.mjs` file:

```mjs
   export default defineConfig({
     // ...other Astro configurations
    integrations: [...other Astro integrations, compressor({ gzip: false, brotli: true })],
   });
```

- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/): Automatically generates a sitemap for a website, which is vital for SEO and helping search engine bots crawl pages effectively. To set up the Astro Sitemap, be sure to specify your site's base URL and any additional options in `astro.config.mjs` file:

```mjs
   export default defineConfig({
  // ...
  site: 'https://example.com',
  integrations: [sitemap()],
});
```

- [Bag of Tricks for Astro's View Tran­si­tions](https://github.com/martrapp/astro-vtbot#readme): is a collection of extensions and support aimed at enhancing Astro's view transitions. Whether you're looking to add flair to your website or streamline user experience, this toolkit offers various techniques to elevate your projects. In the template, it was used to add View Transitions to a Starlight docs.

### Flexibility with Integrations

The great thing about Astro is its rich ecosystem of integrations, allowing you to tailor project functionalities to your exact needs. Feel free to explore [Astro integrations page](https://astro.build/integrations/) and add additional capabilities as you see fit.

## Tools and Technologies

This project is built using a variety of tools and technologies that enhance its performance, maintainability, and developer experience. Below is a list of the key tools and their roles in the project:

### Preline UI

Interactive components like navbars, modals, and accordions are built using [Preline UI](https://preline.co), a comprehensive open-source component library.

### Tailwind CSS

Styling across our project leverages the utility-first classes offered by [Tailwind CSS](https://tailwindcss.com). This methodology allows us to create custom layouts and components with speed and efficiency.

To ensure consistent code formatting, particularly for class sorting, we have integrated the `prettier-plugin-tailwindcss` [plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss). The following configuration is set in the `.prettierrc` file at the root of the project:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Deployment and Security

We deploy our project on [Vercel](https://vercel.com), capitalizing on their robust platform for seamless CI/CD workflows. Using `vercel.json`, we set stringent security headers and caching policies, ensuring adherence to security and performance best practices:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; [other-directives]"
        },
        "Additional security headers..."
      ]
    }
  ]
}
```

### HTML Minification

For optimal site performance, we post-process our HTML files with `process-html.mjs`, a [custom script](https://straffesites.com/en/blog/optimize-astro-html-post-build) that minifies HTML after the build phase to reduce file size and improve load times.

Here is a snippet from our HTML minification script in `process-html.mjs`:

```mjs
/process-html.mjs
// Post-build HTML minification script snippet
// ...
await Promise.all(
  files.map(async (file) => {
    // File processing and minification logic
  })
);
```

We encourage you to refer to the detailed documentation for each tool to fully understand their capabilities and how they contribute to the project:

- [Preline UI Documentation](https://preline.co/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [html-minifier Documentation](https://github.com/kangax/html-minifier)

## Contributing

If you're interested in helping, you can contribute in several ways:

1. Reporting Issues: Feel free to use the issue tracker to report bugs or request features.
2. Submitting Pull Requests: If you've fixed a bug or added a new feature, submit a pull request with a clear description of your changes.
3. Providing Feedback: Share your thoughts on the project's current features and suggest improvements.

## License

This project is released under the MIT License. Please read the [LICENSE](https://github.com/Luqueee/dansa_marluque/blob/main/LICENSE) file for more details.
