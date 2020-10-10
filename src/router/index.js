import { Router } from "express";
import { httpResponse } from "../utils/httpResponse";
import { HTTP_SUCCESS_RESPONSE } from "../constants/HTTP";
import { userRouter } from "./userRouter";

export const router = Router();

router.get("/health-check", (_, res) => {
    httpResponse(HTTP_SUCCESS_RESPONSE.OK, null, res);
});

router.use("/user", userRouter)