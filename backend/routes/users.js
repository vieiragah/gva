import Router from "express";
import passport from "passport";

import UserController from "../controllers/userController.js";
// import Auth from '../middlewares/checkUserConnected.js'

const router = Router();

router.route("/users").post(UserController.create).get(UserController.getAll);

router.route("/login").post(UserController.login);
//Rota autenticada:
router.route("/auth").post(UserController.checkToken);

router
  .route("/users/:id")
  .get(UserController.get)
  .delete(UserController.delete)
  .patch(UserController.editUser);

router.route("/token/:id").get(UserController.checkToken);

// router.post("/auth/login", async (request, response, next) => {
//   const user = await userModel.findOne({ email });
//   try {
//     const secret = process.env.SECRET;
//     let token = jwt.sign(
//       {
//         id: user._id,
//       },
//       secret
//     );
//     res.status(200).json({ msg: "Login efetuado com sucesso.", user, token });
//   } catch (error) {
//     console.log(error);
//   }
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })(request, response, next);
// });

router.get("/check", (request, response) => {
  response.json(request.user);
});

export default router;
//token da ultima do dia
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2NiMzk5NmM4MjVmNjI3ZGRmZThiNyIsImlhdCI6MTY4MTY5OTc2Nn0.ikKREPF-2TcPfy8ijFVeGoKtP70dNFUVj81j_RTXsNE"
