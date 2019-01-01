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
    },
    movie_poster: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    movie_trailer_img: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    movie_title: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    movie_description: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    movie_rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    },
    movie_rating_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
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
