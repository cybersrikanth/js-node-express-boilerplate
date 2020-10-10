import dotenv from "dotenv";
dotenv.config();

process.env.DB_URI = process.env.DB_URI || null;
process.env.SALT_ROUNDS = process.env.DB_URI || 10;
process.env.SECRET = process.env.SECRET || "secret";
process.env.EXP = process.env.EXP || "2d";
process.env.PORT = process.env.PORT || 25000;
process.env.CORS_ALLOWED_ORIGINS =
    process.env.CORS_ALLOWED_ORIGINS || "";
process.env.CORS_MAX_AGE = process.env.CORS_MAX_AGE || 0;