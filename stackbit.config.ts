// stackbit.config.ts
export default {
  stackbitVersion: "~0.6.0",
  ssgName: "eleventy",
  nodeVersion: "18",

  // Eleventy to run inside Visual Editor container
  devCommand: "npx @11ty/eleventy --serve --port {PORT}",

  // Eleventy-specific configuration
  experimental: {
    ssg: {
      proxyWebsockets: true,
      logPatterns: {
        up: ["Server at"],
      }
    }
  },

  // Specific option to prevent Visual Editor from interfering with Eleventy's page reload mechanism
  customContentReload: true
};
