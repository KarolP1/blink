export interface formRegister {
  first_name: string;
  last_name: string;
  useremail: string;
  telephone: string;
  address: string;
  postal_code: string;
  password: string;
  confirm_pass: string;
  selectedItem: string;
}

/**
 * @type for login form
 */
export interface formLogin {
  /**
   * @type string
   */
  email: string;
  /**
   * @type string
   */
  user_pass: string;
}

export interface RegisterInterface {
  form: formRegister;
  succes: boolean;
  response: any;
  error: any;
}

export interface LoginInterface {
  form: formLogin;
  succes: boolean;
  isLoading: boolean;
  response: any;
  error: any;
}

export const initialStateRegister: RegisterInterface = {
  form: {
    first_name: '',
    last_name: '',
    useremail: '',
    telephone: '',
    address: '',
    postal_code: '',
    password: '',
    confirm_pass: '',
    selectedItem: '',
  },

  succes: false,
  response: '',
  error: '',
};
export const initialStateLogin: LoginInterface = {
  form: {
    email: '',
    user_pass: '',
  },

  succes: false,
  response: null,
  isLoading: false,
  error: null,
};
