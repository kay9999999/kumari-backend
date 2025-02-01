module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      sizeLimit: 100000000,
      providerOptions: {
        // other provider options
      },
    },
  },
});
