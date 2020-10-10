const bcrypt = require("bcrypt");

const ROUND = process.env.SALT_ROUNDS;

export class Hasher {
    static hashPassword = async (password) => {
        const salt = await bcrypt.genSalt(parseInt(ROUND));
        return await bcrypt.hash(password, salt);
    };

    static validatePassword = async (password, hashedPassword) =>
        await bcrypt.compare(password, hashedPassword);
}
