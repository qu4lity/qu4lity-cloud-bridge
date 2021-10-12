/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FunctionQA', {
    functionQA_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    used: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    function_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Function',
        key: 'function_id'
      }
    },
    qa1_drying_performance: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    qa2_noise: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    qa3_energy_consumption: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    qa4_component_failure: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    qa5_perceived_quality: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    }
  }, {
    sequelize,
    tableName: 'FunctionQA',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "functionQA_id" },
        ]
      },
      {
        name: "functionQA_fk",
        using: "BTREE",
        fields: [
          { name: "function_id" },
        ]
      },
    ]
  });
};
