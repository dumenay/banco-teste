import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Collections from './Collections';

const Upload = sequelize.define(
  'upload',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Upload.belongsTo(Collections, {
  as: 'collections',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_collections',
    name: 'idCollections',
    allowNull: false,
  },
});

export default Upload;
