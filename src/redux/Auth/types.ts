export interface formRegister {
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  phone_number: string;
  address: addresType;
  postal_code: string;
  password: string;
  confirm_pass: string;
  birth_year: string;
  userRole: string;
}

export interface addresType {
  country: string;
  city: string;
  state: string;
  postcode: string;
  street: string;
  buildingnumber: string;
}

/**
 * @type for login form
 */
export interface formLogin {
  login: string;
  password: string;
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
  response: responseRegister | null;
  error: any;
}
const initAddress = {
  country: '',
  city: '',
  state: '',
  postcode: '',
  street: '',
  buildingnumber: '',
};
export const initialStateRegisterForm = {
  first_name: '',
  last_name: '',
  name: '',
  email: '',
  phone_number: '',
  address: initAddress,
  postal_code: '',
  password: '',
  confirm_pass: '',
  birth_year: '',
  userRole: '',
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
    login: '',
    password: '',
  },

  succes: false,
  response: null,
  isLoading: false,
  error: null,
};

export interface IbusinessData {
  business_name: string | null;
  company_name: string | null;
  vat_number: string | null;
  business_address: string | null;
  business_postalcode: string | null;
  business_town: string | null;
  business_country: string | null;
}
export interface IyourData {
  username: string;
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  gender: string;
  profession: string;
  postalcode: string;
  town: string;
  country: string;
  address: string;
}
export interface responseRegister {
  businessData: IbusinessData;
  yourData: IyourData;
  user: {
    address?: string;
    email?: string;
    first_name?: string;
    gender?: string;
    town?: string;
    country?: string;
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
  };
}

//#region edit user

export interface formEditUser {
  username: string;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  address: string;
  postalcode: string;
  town: string;
  country: string;
  email: string;
}

export interface formEditUserBusiness {
  business_name: string;
  company_name: string;
  vat_number: string;
  firstlineofaddress: string;
  secondlineofaddress: string;
  thirdlineofaddress: string;
  business_postalcode: string;
  business_town: string;
  business_country: string;
}
