const userService = require("../services/userService");
const STATUS_CODES =
{
    SUCCESS: { OK: { code: 200 } },
    CLIENT_ERROR: { BAD_REQUEST: { code: 400 } }
};

exports.register = (req, res, next) => {
    const { name, email, password, city, state, phone_number, date_of_birth, district } = req.body;

    if (!name || !email || !password || !city || !state || !phone_number || !date_of_birth || !district) {
        return res.status(400).json({
            status: 0,
            message: "All fields are required!"
        });
    }

    userService.register({ name, email, password, city, state, phone_number, date_of_birth, district }, (error, message, userData) => {
        if (error) {
            console.error(error);
            return res.status(400).json({
                status: 0,
                message: error
            });
        }
        return res.status(200).json({
            status: 1,
            //  data: userData,
            message,
        });
    });
};

exports.login = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 0,
            message: "Email and Password are required!"
        });
    }

    userService.login({ email, password }, (error, message, userData) => {
        if (error) {
            console.error(error);
            return res.status(400).json({
                status: 0,
                message: error
            });
        }

        return res.status(200).json({
            status: 1,
            data: userData,
            message,
        });
    });
};
