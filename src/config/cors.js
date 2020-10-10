import cors from "cors";
const maxAge = process.env.CORS_MAX_AGE;
let origins = process.env.CORS_ALLOWED_ORIGINS;
origins = origins ? String(process.env.CORS_ALLOWED_ORIGINS).split(" ") : null;

const corsConfig = (req, callback) => {
    const corsOptions = {
        maxAge,
        origin: origins ? origins.indexOf(req.header("Origin")) !== -1 : "*",
    };
    callback(null, corsOptions);
};

export default cors(corsConfig);
