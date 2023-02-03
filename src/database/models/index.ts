/* eslint-disable import/no-extraneous-dependencies */
import { Sequelize } from "sequelize";

import * as config from "../config/database";

const database = new Sequelize(config);

export default database;
