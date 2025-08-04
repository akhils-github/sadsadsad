import axios from "axios";


// Axios instances
const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_ADMIN_URL,
};

export const basicRequest = axios.create(baseConfig);
export const basicXFormRequest = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// CONSTANTS

export const RECAPTCHA_VERIFY = "verify-recaptcha/lael";
export const CONTACT_FORM = "contact-forms";
