import express, { Router } from "express";
import { checkSchema, Schema, validationResult } from "express-validator";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

const login_schema: Schema = {
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

// TODO: Implement sign up schema
const signup_schema: Schema = {};

router.post(
  "/login",
  checkSchema(login_schema),
  async (req: express.Request, res: express.Response) => {
    // schema validation
    const schemaError = validationResult(req);
    if (!schemaError.isEmpty()) {
      return res.status(400).json({ err: schemaError.array() });
    }
    try {
      const data = await prisma.data.findMany();
      console.log(data);
      res.send(data);
    } catch (error) {
      res.sendStatus(500);
    }
  }
);

router.post(
  "/register",
  checkSchema(signup_schema),
  async (req: express.Request, res: express.Response) => {
    // schema validation
    const schemaError = validationResult(req);
    if (!schemaError.isEmpty()) {
      return res.status(400).json({ err: schemaError.array() });
    }
    try {
      const data = await prisma.data.findMany();
      console.log(data);
      res.send(data);
    } catch (error) {
      res.sendStatus(500);
    }
  }
);

export default router;
