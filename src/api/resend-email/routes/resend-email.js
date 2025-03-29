"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/auth/resend-email-confirmation",
      handler: "resend-email.resendEmail",
      config: {
        auth: false, // or configure authentication as needed
      },
    },
  ],
};
