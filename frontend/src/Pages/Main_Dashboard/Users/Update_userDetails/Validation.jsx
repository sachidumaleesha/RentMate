function Validation(values) {
  let errors = {};

  const contact_number = /^\d{10}$/;

  

  if (!values.contactNumber) {
    errors.contactNumber = "Contact number is required";
  } else if (!contact_number.test(values.contactNumber)) {
    errors.contactNumber = "Contact number should contain exactly 10 numbers";
  }
  return errors;
}
export default Validation;
