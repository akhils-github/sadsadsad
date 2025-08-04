import axios from "axios";

// Axios instances
const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

export const basicRequest = axios.create(baseConfig);
export const basicXFormRequest = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// CONSTANTS

export const HOME_PAGE = "home-page";
export const SEO = "global";
