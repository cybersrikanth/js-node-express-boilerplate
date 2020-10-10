const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;
const EXP = process.env.EXP;

export class Jwt {
    static getSecret = (user) => `${SECRET}${user.password}`;

    static getToken = async (user) => {
        const NEW_SECRET = Jwt.getSecret(user);
        const token = await jwt.sign(
            {
                id: user._id,
                session: user.session,
            },
            NEW_SECRET,
            {
                expiresIn: EXP,
            }
        );

        return token;
    };

    static verifyToken = async (token, user) => {
        const NEW_SECRET = Jwt.getSecret(user);
        const decoded = await jwt.verify(token, NEW_SECRET);
        return decoded;
    };

    static decodeToken = async (token) => {
        const decoded = await jwt.decode(token);
        return decoded;
    };
}
