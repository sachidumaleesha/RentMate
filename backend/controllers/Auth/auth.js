import User from "../../models/Users/user.js";
import bcrypt from "bcrypt";
import createError from "http-errors";
import jwt from "jsonwebtoken";

//for register
export const register = async (req, res, next) => {
    try{

        //To encrypt the password
        const salt = bcrypt.genSaltSync(18);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newuser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            type: req.body.type
        });
        await newuser.save();
        res.status(201).send("User has Been created");

    }catch(err){
        next(err);
    }

}

// for login
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User not found"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "Invalid credentials"));

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password, ...others } = user._doc;
        
        res.cookie("access_token", token, {
            httpOnly: true,
            sameSite: "none",  // Set SameSite to "none" to allow cross-site requests (for example, between different domains).
            secure: true,      // Set secure to true to ensure the cookie is only sent over HTTPS.
        }).status(200).json({...others});
    } catch (err) {
        next(err);
    }
};





