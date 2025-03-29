module.exports = ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        secret: env("JWT_SECRET"), // Use 'jwt.secret' instead of 'jwtSecret'
        expiresIn: "7d", // Set a reasonable expiration time for JWTs
      },
      verificationToken: {
        length: 40, // Must match generated token length (40 characters)
        expiresIn: "24h", // Token validity duration
      },
      email_confirmation: {
        enabled: true,
      },
    },
  },
  upload: {
    config: {
      provider: "local",
      sizeLimit: 100000000,
      providerOptions: {
        localServer: {
          maxage: 300000, // Cache control max age in milliseconds
        },
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
        html: true,
      },
      settings: {
        defaultFrom: "shivam.samant.ss@gmail.com",
        defaultReplyTo: "shivam.samant.ss@gmail.com",
      },
    },
  },
});
