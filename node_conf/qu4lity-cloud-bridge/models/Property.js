/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Property', {
    property_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    property1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    property2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    property3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    property4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    property5: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Property',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "property_id" },
        ]
      },
    ]
  });
};
