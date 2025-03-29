module.exports = (plugin) => {
  plugin.controllers.auth.emailConfirmation = async (ctx) => {
    try {
      const token = ctx.query.confirmation;

      // Validate confirmation token format
      if (!token || !/^[a-f0-9]{40}$/.test(token)) {
        return ctx.redirect(
          "http://localhost:3000/auth/error?code=invalid_token_format"
        );
      }

      // Find and update the user by confirmation_token
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { confirmation_token: token } });

      if (!user) {
        return ctx.redirect(
          "http://localhost:3000/auth/error?code=invalid_token"
        );
      }

      await strapi.plugin("users-permissions").service("user").edit(user.id, {
        confirmed: true,
        confirmation_token: null,
        blocked: false,
      });

      // Generate JWT including email
      const jwt = strapi.plugins["users-permissions"].services.jwt.issue({
        id: user.id,
        email: user.email,
      });

      // Force a fixed redirect URL without any query parameters
      const redirectUrl = "http://localhost:3000/auth/verify-email";
      const finalUrl = `${redirectUrl}?jwt=${encodeURIComponent(jwt)}&userEmail=${encodeURIComponent(user.email)}`;
      console.log("Strapi redirect final URL:", finalUrl); // Check your Strapi logs
      return ctx.redirect(finalUrl);
    } catch (error) {
      console.error("Verification error:", error);
      return ctx.redirect("http://localhost:3000/auth/error?code=server_error");
    }
  };
  return plugin;
};
