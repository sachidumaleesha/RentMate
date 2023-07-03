import Customer from "../models/Customer.js";
import todo from "../models/Customer/Todo.js";
import multer from 'multer';
import User from "../models/Usermanage/Usermanage.js";
import bcrypt from "bcrypt";
// import Usermanage from "../models/Usermanage/Usermanage.js";
import Reservation from '../models/Payment/reservation.js'


// // profile pic upload
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './controllers/uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
//     }
// });
// const upload = multer({ storage: storage });

// export const uploadProfilePic = upload.single('avatar');



//full user details upload with profile pic  
  // const upload = multer({ storage: storage });
  
  export const UpdateCustomer = async (req, res) => {
    upload.single('avatar')(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: 'Error uploading file' });
      }
  
      const { fname, lname, email, phone, address, city } = req.body;
  
      try {
        const newCustomer = new Customer({
          fname,
          lname,
          email,
          phone,
          address,
          city,
          avatar: req.file.filename,
        });
        await newCustomer.save();
        res.status(201).json(newCustomer);
      } catch (error) {
        res.status(409).json({ message: error.message });
      }
    });
  };
  




// //insert user data Original Code
// export const createCustomer = async (req, res) => {
//     const { userid,fname, lname, email, phone, address, city,avatar } = req.body;
//     try {
//         const newCustomer = new Customer({
//         userid,
//         fname,
//         lname,
//         email,
//         phone,
//         address,
//         city,
//         avatar
//         });
//         await newCustomer.save();
//         res.status(201).json(newCustomer);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

export const createCustomer = async (req, res) => {
  const { userid } = req.body;
  try {
      const newCustomer = new Customer({
          _id: userid,
          fname: '',
          lname: '',
          email: '',
          phone: '',
          address:'',
          city: '',
          avatar: ''
      });
      await newCustomer.save();
      res.status(201).json(newCustomer);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}




//Customer name update
export const updateCustomer_name = async (req, res) => {
    let { id } = req.params;
    const { fname, lname } = req.body;

    const updateCustomer = { fname, lname, _id: id }

    const update = await Customer.findByIdAndUpdate(id, updateCustomer)
    .then(() => {  
        res.status(200).send({ status: "User Updated"});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" });
    }
    );
}
 
//Customer email update
export const updateCustomer_email = async (req, res) => {
    let { id } = req.params;
    const { email } = req.body;

    const updateCustomer = { email, _id: id}

    const update = await Customer.findByIdAndUpdate(id, updateCustomer)
    .then(() => {  
        res.status(200).send({ status: "User Updated"});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" });
    }
    );
}
//Customer phone update
export const updateCustomer_phone = async (req, res) => {
    let { id } = req.params;
    const { phone } = req.body;

    const updateCustomer = { phone, _id: id}

    const update = await Customer.findByIdAndUpdate(id, updateCustomer)
    .then(() => {  
        res.status(200).send({ status: "User Updated"});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" });
    }
    );
}
//Customer address update
export const updateCustomer_address = async (req, res) => {
    let { id } = req.params;
    const { address } = req.body;

    const updateCustomer = { address, _id: id}

    const update = await Customer.findByIdAndUpdate(id, updateCustomer)
    .then(() => {  
        res.status(200).send({ status: "User Updated"});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" });
    }
    );
}
//Customer city update
export const updateCustomer_city = async (req, res) => {
    let { id } = req.params;
    const { city } = req.body;

    const updateCustomer = { city, _id: id}

    const update = await Customer.findByIdAndUpdate(id, updateCustomer)
    .then(() => {  
        res.status(200).send({ status: "User Updated"});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" });
    }
    );
}

//update password
export const updatePassword = async (req, res) => {
  let { id } = req.params;
  const { password } = req.body;

  const salt = await bcrypt.genSalt(6);
  const hashedpassword = await bcrypt.hash(password, salt);

  const update = await User.findByIdAndUpdate(id, {password: hashedpassword})
  .then(() => {
      res.status(200).send({ status: "Password Updated"});
  }
  )

}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../frontend/src/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  },
});


var upload = multer({ storage: storage });

//Customer avatar update
export const UpdateAvatar = async (req, res) => {
  
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//         return res.status(500).json(err)
//     } else if (err) {
//         return res.status(500).json(err)
//     }

//     return res.status(200).send(req.file)

// })

upload.single('file')(req, res, async function (err) {

  if (err) {
    return res.status(400).json({ message: 'Error uploading file' });
  }
  const filenameeee = req.file.filename;
  console.log(filenameeee);

  const { id } = req.params;
  const updateCustomer = { avatar: filenameeee };

  const update = await Customer.findByIdAndUpdate(id, updateCustomer)
  .then(() => {  
      res.status(200).send({ status: "User Updated"});
  })
  .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
  }
  );
});
}

//get customer data
export const getCustomer = async (req, res) => {
    let { id } = req.params;
    const customer = await Customer.findById(id);
    res.status(200).json(customer);
}

//delete customer
export const deleteCustomer = async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Customer has been delete");
    } catch (err) {
      next(err);
    }
};

//insert to do
export const insertTodo = async (req, res) => {

        const { userid , content } = req.body;
        console.log(userid);
        console.log(content);

          try {
              const newtodo = new todo({
                userid,
                content
              });
              await newtodo.save();
              res.status(201).json(newtodo);
          } catch (error) {
              res.status(409).json({ message: error.message });
          }
};

//get to do
export const getTodo = async (req, res) => {
    let { id } = req.params;
    const todos = await todo.find({userid: id});
    res.status(200).json(todos);
}

//get basic customer data
export const getCustomerbasic = async (req, res) => {
  let { id } = req.params;
  const customer = await User.findById(id);
  res.status(200).json(customer);
}

//get property booking details
export const getpropertybooking = async (req, res) => {
  let { id } = req.params;
  const property = await Reservation.find({customerid: id});
  res.status(200).json(property);
}

//update customer data in reservation
export const updatepropertybooking = async (req, res) => {
  let { id } = req.params;
  const {cus_name} = req.body;
  const {contactNo} = req.body;
 
  const updateCustomer = { cus_name, contactNo, _id: id}

  const update = await Reservation.findByIdAndUpdate(id, updateCustomer)
  .then(() => {
      res.status(200).send({ status: "User Updated"});
  })
}

//delete customer data in reservation
export const deletepropertybooking = async (req, res, next) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json("Data has been delete");
  } catch (err) {
    next(err);
  }
}