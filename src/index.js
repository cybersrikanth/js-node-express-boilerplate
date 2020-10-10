import "./config/environment";
import express from "express";
import cors from "./config/cors";
import { connect } from "./config/database";
import { router } from "./router";
import { handler } from "./Error/handler";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors);

(async () => {
    try {
        await connect();
        console.log("db connection success");
        app.disable("x-powered-by");
        app.use("/api", router);    // api routes
        app.use(handler);           // global error handler
        app.listen(PORT, () =>
            console.log("Express server is running on port", PORT)
        );
    } catch (error) {
        console.log("db connection failed", error);
        process.exit(1);
    }
})();
