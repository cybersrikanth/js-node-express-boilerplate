import { Router } from "express";
import { UserController } from "../controller/UserController";
import { UserValidator } from "../validator/UserValidator";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

export const userRouter = Router();

userRouter.post("/signUp", [UserValidator.create], UserController.create);
userRouter.post("/signIn", [UserValidator.signIn], UserController.signIn);

userRouter.use(AuthMiddleware.validate);
userRouter.patch("/signout", UserController.signout);

// userRouter.use(handler);
