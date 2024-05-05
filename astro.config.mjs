import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://dansamarluque.com",
  image: {
    domains: ["cdn.dansamarluque.com", "dansamarluque.com"],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    fallback: {
      fr: "en",
    },
  },
  prefetch: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en",
          // The `defaultLocale` value must present in `locales` keys
          fr: "fr",
        },
      },
    }),
    starlight({
      title: "Dansa Mar Luque Docs",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
        es: {
          label: "Español",
          lang: "es",
        },
        fa: {
          label: "Persian",
          lang: "fa",
          dir: "rtl",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      // https://starlight.astro.build/guides/sidebar/

      social: {
        github: "https://github.com/Luqueee/dansa_marluque",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "https://cdn.dansamarluque.com/logo.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://cdn.dansamarluque.com" + "/icon.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://cdn.dansamarluque.com" + "/icon.png",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    react(),
  ],
  output: "server",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
