module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "http://localhost:3000"),
  logger: {
    level: "debug", // Try increasing to "silly" for maximum verbosity
    requests: true,
    custom: {
      logLevel: "silly", // Optional: Force more detailed logs
      customFormatter: (options) => {
        return {
          level: options.level,
          message: options.message,
          timestamp: new Date().toISOString(),
          ...options.meta,
        };
      },
    },
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
