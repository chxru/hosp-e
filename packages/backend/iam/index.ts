import express from "express";
import cors from "cors";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import authRoutes from "./routes/auth";

const app = express();
app.use(express.json()); // middleware to handle json POST & PUT json data
app.use(
  cors({ origin: "*", credentials: true, allowedHeaders: ["GET", "POST"] })
);

// routes
app.use("/auth", authRoutes);

app.all("/", (_, res) => {
  res.sendStatus(200);
});

const PORT = process.env.IDENTITY_SERVICE_PORT;
(async () => {
  try {
    await app.listen(PORT);
    console.log(`Indentity service running at port ${PORT}`);
  } catch (error) {
    console.error(
      `Error occured while starting identity service at port ${PORT}`
    );
    console.error(error.message);
  }
})();
