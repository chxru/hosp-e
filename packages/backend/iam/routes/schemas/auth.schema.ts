import type { Schema } from "express-validator";

export const login_schema: Schema = {
  email: {
    in: "body",
    errorMessage: "Invalid email address",
    isEmail: true,
    trim: true,
  },
  password: {
    in: "body",
    errorMessage: "Invalid password",
    // isStrong doesn't make sense in login schema validation
    // but it will prevent unnecessary database reads in some cases
    isStrongPassword: {
      bail: true,
      errorMessage: "Week password",
    },
  },
};

export // TODO: Implement sign up schema
const signup_schema: Schema = {};
