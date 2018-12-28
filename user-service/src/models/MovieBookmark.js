import getNewId from "./common/getNewId";

export const MovieBookmarkFactory = (sequelize, DataTypes) => {
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
  const MovieBookmark = sequelize.define("movie_bookmark", attributes);
  MovieBookmark.associate = models => {
    MovieBookmark.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        field: "user_id"
      }
    });
  };
  return MovieBookmark;
};
