'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daily_record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      try {
        
        models.daily_record.hasOne(models.rating, {as: 'ratingId', foreignkey:"id"});
      } catch (error) {
        console.log(error.message)
      }
    }
  }
  daily_record.init({
    mood: DataTypes.STRING,
    ratingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'daily_record',
  });
  return daily_record;
};