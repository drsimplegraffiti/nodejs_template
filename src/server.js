const app = require("./app");
require("dotenv").config();
const logger = require("./logger/logger");

const port = process.env.PORT || 3456;

const server = async () => {
  try {
    app.listen(port , () => {
      logger.info(`Server is running on port ${port}`);
    });
  } catch (error) {
    logger.error(error);
    logger.warn(error);
    logger.fatal(error);
  }
};

logger.info(process.env.NODE_ENV);
server();
