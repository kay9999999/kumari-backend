// module.exports = {
//   async emailConfirmationCheck(ctx) {
//     try {
//       console.log("Request body:", ctx.request.body);

//       const { confirmation } = ctx.request.body;

//       if (!confirmation) {
//         console.log("No confirmation token provided");
//         return ctx.badRequest({ message: "Missing confirmation token" });
//       }

//       const user = await strapi
//         .query("plugin::users-permissions.user")
//         .findOne({
//           where: { confirmation_token: confirmation },
//         });

//       console.log("Database query result:", user);

//       if (!user) {
//         console.log("No user found for token:", confirmation);
//         return ctx.badRequest({ message: "Invalid confirmation token" });
//       }

//       console.log("User confirmation status:", user.confirmed);

//       return ctx.send({
//         id: user.id,
//         email: user.email,
//         confirmed: true, // Force confirmed status
//       });
//     } catch (error) {
//       console.error("Controller error:", error);
//       return ctx.internalServerError({ message: "Server error" });
//     }
//   },
// };
