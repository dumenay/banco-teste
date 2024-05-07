import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Types = sequelize.define(
  'types',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    format: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Types;
