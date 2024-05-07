import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Users from './Users';

const Subscriptions = sequelize.define(
  'subscriptions',
  {
    dateSubscription: {
      field: 'date_subscription',
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Subscriptions.belongsTo(Users, {
  as: 'usersuser',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_users',
    name: 'idUsers',
    primaryKey: true,
    allowNull: false,
  },
});

Subscriptions.belongsTo(Users, {
  as: 'userssub',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_subscription',
    name: 'idSubscription',
    primaryKey: true,
    allowNull: false,
  },
});

Subscriptions.removeAttribute('id');

export default Subscriptions;
