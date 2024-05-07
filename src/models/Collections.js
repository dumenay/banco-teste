import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Users from './Users';

const Collections = sequelize.define(
  'collections',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Collections.belongsTo(Users, {
  as: 'users',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_users',
    name: 'idUsers',
    allowNull: false,
  },
});

export default Collections;
