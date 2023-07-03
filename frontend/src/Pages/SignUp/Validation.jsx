function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const contact_number = /^\d{10}$/

  if (values.email === "") {
    errors.email = "Email Required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid Email!";
  }

  if (values.fname === "") {
    errors.fname = "Fisrt name Required!";
  } 

  if (values.lname === "") {
    errors.lname = "Last name Required!";
  } 

  if (values.username === "") {
    errors.username = "Last name Required!";
  }


  if (values.password === "") {
    errors.password = "Password Required!";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
  }
  if (
    values.confirm_password === "" ||
    String(values.confirm_password) !== String(values.password)
  ) {
    console.log(values.confirm_password + "" + values.password);
    errors.confirm_password = "Password not matched!";
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Contact number is required';
  } else if (!contact_number.test(values.contactNumber)) {
    errors.contactNumber = 'Contact number should contain exactly 10 numbers';
  }
  return errors;
}
export default Validation;
