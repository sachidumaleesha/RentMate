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


  if (values.password === "") {
    errors.password = "Password Required!";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Invalid Password!";
  }
  if (
    values.confirm_password === "" ||
    String(values.confirm_password) !== String(values.password)
  ) {
    console.log(values.confirm_password + "" + values.password);
    errors.confirm_password = "Password not matched!";
  }

  if (!values.contactNumber) {
    errors.contactNumber = "Contact number is required";
  } else if (!contact_number.test(values.contactNumber)) {
    errors.contactNumber = "Contact number should contain exactly 10 numbers";
  }
  return errors;
}
export default Validation;

