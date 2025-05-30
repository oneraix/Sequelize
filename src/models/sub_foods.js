const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_foods', {
    subId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'foods',
        key: 'foodId'
      }
    }
  }, {
    sequelize,
    tableName: 'sub_foods',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subId" },
        ]
      },
      {
        name: "foodId",
        using: "BTREE",
        fields: [
          { name: "foodId" },
        ]
      },
    ]
  });
};
