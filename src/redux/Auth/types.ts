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
  isLoading: boolean;
}

export interface LoginInterface {
  form: formLogin;
  succes: boolean;
  isLoading: boolean;
  response: {data: responseRegister} | null;
  error: any;
}

export const initialStateRegisterForm = {
  first_name: '',
  last_name: '',
  useremail: '',
  telephone: '',
  address: '',
  postal_code: '',
  password: '',
  confirm_pass: '',
  selectedItem: '',
};

export const initialStateRegister: RegisterInterface = {
  form: initialStateRegisterForm,
  isLoading: false,
  succes: false,
  response: null,
  error: null,
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

export interface responseRegister {
  address?: string;
  email?: string;
  first_name?: string;
  gender?: string;
  last_name?: string;
  postalcode?: string;
  profession?: string;
  user_status?: string;
  username?: string;
  dob?: string;
  coverphoto?: string;
  dp?: string;
  id?: number;
  business_name?: string;
  company_name?: string;
  vat_number?: string;
  firstlineofaddress?: string;
  secondlineofaddress?: string;
  thirdlineofaddress?: string;
  business_postalcode?: string;
  business_town?: string;
  business_country?: string;
}
