function Validation10(values){

        let errors = {};
        if (!values.name) {
          errors.name = 'Name is required';
        } else if (!/^[a-zA-Z]+$/.test(values.name)) {
          errors.name = 'Name should contain only letters';
        }
        if (!values.email) {
          errors.email = 'Email is required';
        }
        if (!values.contact) {
          errors.contact = 'Contact number is required';
        } else if (!/^\d{10}$/.test(values.contact)) {
          errors.contact = 'Contact number should contain exactly 10 numbers';
        }
        if (!values.date) {
          errors.date = 'Date is required';
        }
        if (!values.description) {
          errors.description = 'Description is required';
        }
        return errors;
      };

export  default Validation10;