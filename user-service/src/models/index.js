import Sequelize from "sequelize";

import { UserFactory } from "./User";
import { MovieHistoryFactory } from "./MovieHistory";
import { MovieBookmarkFactory } from "./MovieBookmark";
import sequelizeConfig from "../config/sequelizeConfig";

const createModels = config => {
  const { database, username, password, params } = config;
  const sequelize = new Sequelize(database, username, password, params);
  const models = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize),
    MovieHistory: MovieHistoryFactory(sequelize, Sequelize),
    MovieBookmark: MovieBookmarkFactory(sequelize, Sequelize)
  };

  Object.keys(models).forEach(modelName => {
    if ("associate" in models[modelName]) {
      models[modelName].associate(models);
    }
  });
  return models;
};

const models = createModels(sequelizeConfig);
export default models;
