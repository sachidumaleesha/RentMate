import Usermanage from "../../models/Usermanage/Usermanage.js";


//importing bcrypt
import bcrypt from "bcrypt";
//importing jsonwebtoken
import jwt from "jsonwebtoken";
import validator from "validator";



//Creating a Token to give access to users to user services
//user id and user's role is passed with token
const createToken = (_id) => {
  console.log(process.env.JWT_SECRET)
  return jwt.sign({ _id }, process.env.JWT_SECRET)
}



// CREATE
export const signUp = async (req, res, next) => {
  const { fname, lname, email, contactNumber, roll, username, password } = req.body
  console.log(fname, lname, email, contactNumber, roll, username, password)
  

  //validation for all the input fields
  if (!fname || !lname || !email || !contactNumber || !roll || !username || !password) {
    throw Error('All fields must be filled')
  }


  //checking wheather email is valid or not
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }

  let existingUser;
  //chaecking whether user already sign up or not based on the email
  try {
    existingUser = await Usermanage.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }

  if (existingUser) {
    return res.status(400).json({ message: "User already exist...login instead " })
  }

  const salt = await bcrypt.genSalt(6)
  //hashsync is a function that can hasing the password
  const hashedpassword = await bcrypt.hash(password, salt);


  //creating a new User
  const user = new Usermanage({
    fname,
    lname,
    email,
    contactNumber,
    roll,
    username,
    password: hashedpassword,
  });

  try {
    await user.save();//saving document(a new user to) into DB

    const token = createToken(user._id) //calling to createToken function to create a token for user


    //Create and setting a cookie with the user's ID and token
    res.cookie(String(user._id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60),
      httpOnly: true,//if this option isn't here cookie will be visible to the frontend
      sameSite: "lax"
    })

    res.status(201).json({ message: "user succesfully registered", User: user, token })//sending the new user details with token as a message for the response
  } catch (err) {
    console.log(err);
    throw new Error('Error saving user');
  }
};





// UPDATE
export const updateUser = async (req, res, next) => {
  const id = req.params.id;

  const { fname, lname, contactNumber, roll, username, password } = req.body;
  const salt = await bcrypt.genSalt(6)
  //hashsync is a function that can hasing the password
  const hashedpassword = await bcrypt.hash(password, salt);
  let user
  try {
    user = await Usermanage.findByIdAndUpdate(id, {
      fname,
      lname,
      contactNumber,
      roll,
      username,
      password: hashedpassword
    });
    console.log(user)
    user = await user.save();
  } catch (err) {
    console.log(err);
  } if (!user) {
    return res.status(404).json({ message: "Unable to update" });
  } else {
    return res.status(200).json({ user });
  }
};

// update paid status
export const updatePaid = async (req, res, next) => {
  const id = req.params.id;
  let user
  try {
    user = await Usermanage.findByIdAndUpdate(id, {
      paid: true
    });
    user = await user.save();
  } catch (err) {
    console.log(err);
  } if (!user) {
    return res.status(404).json({ message: "Unable to update" });
  } else {
    return res.status(200).json({ user });
  }
};


// DELETE
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await Usermanage.findByIdAndRemove(id)

    res.clearCookie(`${id}`);
    req.cookies[`${id}`] = "";
    res.json({ message: "Account deleted successfully!!" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Error in deleting you account" })
  }
}

// GET
export const getUser = async (req, res, next) => {
  const id = req.params.id
  let user;
  try {
    user = await Usermanage.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" })
  } else {
    return res.status(200).json({ user })
  }
};

// GET ALL
export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await Usermanage.find({});
  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(404).json({ message: "No users found" })
  }
  else {
    return res.status(200).json({ users }) //display users if there are users
  }
}

//login
export const login = async (req, res, next) => {
  try {
    const user = await Usermanage.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Invalid credentials"));

    //token updated
    const token = jwt.sign({ id: user._id, roll: user.roll, paid: user.paid }, process.env.JWT_SECRET);
    const { password, ...others } = user._doc;
    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json({ ...others });
  } catch (err) {
    next(err);
  }
}






