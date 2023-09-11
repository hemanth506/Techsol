import { cleanEnv, str, port } from "envalid";
import { config } from "dotenv";
config();

const portId: unknown = process.env.PORT;

export const envVar = cleanEnv(process.env, {
  PORT: port({ default: portId as number }),
  MONGODB_URI: str({
    default: process.env.MONGODB_CONNECTION_STRING,
  }),
  FROM_EMAIL: str({
    default: process.env.FROM_EMAIL,
  }),
  FROM_PASS: str({
    default: process.env.FROM_PASS,
  }),
  TO_EMAIL: str({
    default: process.env.TO_EMAIL,
  }),
});
