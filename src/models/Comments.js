import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Users from './Users';
import Upload from './Upload';

const Comments = sequelize.define(
  'comments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Comments.belongsTo(Users, {
  as: 'users',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_users',
    name: 'idUsers',
    allowNull: false,
  },
});

Comments.belongsTo(Upload, {
  as: 'upload',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_upload',
    name: 'idUpload',
    allowNull: false,
  },
});

export default Comments;
