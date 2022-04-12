const config = require("config");
const app = require("./app");
require("dotenv").config();
const logger = require("./logger/logger");

const port = config.get("app_server.port") || 3000;
const host = config.get("app_server.host") || "localhost";

const server = async () => {
  try {
    app.listen(port || 3000, host, () => {
      logger.info(`Server is running on port ${port || 3000}`);
    });
  } catch (error) {
    logger.error(error);
    logger.warn(error);
    logger.fatal(error);
  }
};

logger.info(process.env.NODE_ENV);
server();
