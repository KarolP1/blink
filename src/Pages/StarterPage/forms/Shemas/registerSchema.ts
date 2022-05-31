import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required('Your firstname is required'),
  last_name: Yup.string().required(),
  useremail: Yup.string().email().required(),
  telephone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  address: Yup.string().required(),
  postal_code: Yup.string().required(),
  password: Yup.string().min(6).required(),
  confirm_pass: Yup.lazy(() =>
    Yup.string()
      .oneOf([Yup.ref('password'), undefined])
      .required(),
  ),
  // selectedItem: Yup.string().required(),
});
