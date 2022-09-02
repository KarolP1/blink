import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const RegisterSchema1 = Yup.object().shape({
  first_name: Yup.string().required('Your firstname is required'),
  last_name: Yup.string().required(),
  email: Yup.string().email().required(),
  name: Yup.string().min(3).required(),
  phone_number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
});
