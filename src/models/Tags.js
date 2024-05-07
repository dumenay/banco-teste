import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Types from './Types';

const Tags = sequelize.define(
  'tags',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tags: {
      type: DataTypes.STRING(50),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Tags.belongsTo(Types, {
  as: 'types',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_types',
    name: 'idTypes',
    allowNull: false,
  },
});

export default Tags;
