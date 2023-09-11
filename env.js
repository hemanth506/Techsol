const { cleanEnv, str, port } = require("envalid");
const { config } = require("dotenv");
config();

const envVar = cleanEnv(process.env, {
  PORT: port({ default: process.env.PORT }),
  MONGODB_URI: str({
    default: process.env.MONGODB_URI,
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

module.exports = { envVar };
