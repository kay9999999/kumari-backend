module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000"], // Allow requests from your Next.js frontend
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allow these HTTP methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
