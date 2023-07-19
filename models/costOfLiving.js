const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CostOfLiving extends Model { }

CostOfLiving.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        rank: {
            type: DataTypes.INTEGER,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        col_index: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        rent_index: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        col_rent_index: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        groceries_index: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Cost_Of_Living',
    }
)

module.exports = CostOfLiving;