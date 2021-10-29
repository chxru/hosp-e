import express, { Router } from "express";
import { checkSchema, validationResult } from "express-validator";
import { login_schema, signup_schema } from "./schemas/auth.schema";

const router = Router();

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
      res.json({ success: true });
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
      res.json({ success: true });
    } catch (error) {
      res.sendStatus(500);
    }
  }
);

export default router;
