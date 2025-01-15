import { Lumber } from "./index.js";

const logger = new Lumber();
const x = new TypeError("lool");

logger.info("launching app ...");
logger.warn("no config file found");
logger.error("failed to connect");
logger.fatal("out of memory");
logger.fatal(x);
