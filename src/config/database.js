import Mongoose from "mongoose";

const DB_OPTIONS = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

export const connect = async () => {
    return await Mongoose.connect(process.env.DB_URI, DB_OPTIONS);
};
