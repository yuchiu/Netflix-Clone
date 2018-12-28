import getNewId from "./common/getNewId";

export const BrowsingHistoryFactory = (sequelize, DataTypes) => {
  const attributes = {
    id: {
      type: DataTypes.STRING,
      defaultValue: getNewId,
      primaryKey: true
    },
    movie_id: {
      type: DataTypes.STRING,
      defaultValue: ""
    }
  };
  const BrowsingHistory = sequelize.define("browsing_history", attributes);
  BrowsingHistory.associate = models => {
    BrowsingHistory.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        field: "user_id"
      }
    });
  };
  return BrowsingHistory;
};
