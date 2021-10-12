/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    productionOrder_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ProductionOrder',
        key: 'productionOrder_id'
      }
    },
    engineeringBoM_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'EngineeringBoM',
        key: 'engineeringBoM_id'
      }
    },
    industrialModel_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    commercialModel_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    descriptionModel: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_fk_1",
        using: "BTREE",
        fields: [
          { name: "productionOrder_id" },
        ]
      },
      {
        name: "product_fk_2",
        using: "BTREE",
        fields: [
          { name: "engineeringBoM_id" },
        ]
      },
    ]
  });
};
