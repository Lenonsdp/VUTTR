import Sequelize from 'sequelize';

import User from '../app/models/User';
import Tools from '../app/models/Tools';
import ToolsTags from '../app/models/ToolsTags';

import dataBaseConfig from '../config/database';

const models = [User, Tools, ToolsTags];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
