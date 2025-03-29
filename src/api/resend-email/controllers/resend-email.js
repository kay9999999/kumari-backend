"use strict";

module.exports = {
  async resendEmail(ctx) {
    const { email } = ctx.request.body;
    console.log("Received email:", email); // Debug log

    if (!email) {
      return ctx.badRequest("Email is required");
    }

    // Find the user by email using the Users-Permissions plugin
    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: { email },
    });

    if (!user) {
      return ctx.notFound("User not found");
    }

    // If the user is already confirmed, we don't need to send an email
    if (user.confirmed) {
      return ctx.badRequest("User already confirmed");
    }

    try {
      console.log("Sending confirmation email to:", user.email);
      await strapi
        .plugin("users-permissions")
        .service("user")
        .sendConfirmationEmail(user);
      console.log("Confirmation email sent successfully");
      ctx.send({ message: "Confirmation email sent" });
    } catch (err) {
      console.error("Error sending confirmation email:", err);
      return ctx.internalServerError("Error sending email");
    }
  },
};
