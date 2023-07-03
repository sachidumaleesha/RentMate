const Validation = (values) => {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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

  return errors;
};

export default Validation;
