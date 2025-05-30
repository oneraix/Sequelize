const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like_res', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
        primaryKey: true,
      references: {
        model: 'users',
        key: 'userId'
      }
    },
    resId: {
      type: DataTypes.INTEGER,
      allowNull: true,
        primaryKey: true,
      references: {
        model: 'restaurants',
        key: 'resId'
      }
    },
    dateLike: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'like_res',
    timestamps: false,
    indexes: [
      {
        name: "userId",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "resId",
        using: "BTREE",
        fields: [
          { name: "resId" },
        ]
      },
    ]
  });
};
