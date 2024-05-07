import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Tags from './Tags';
import Upload from './Upload';

const UploadTag = sequelize.define(
  'uploadtag',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

UploadTag.belongsTo(Tags, {
  as: 'tags',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_tags',
    name: 'idTags',
    allowNull: false,
  },
});

UploadTag.belongsTo(Upload, {
  as: 'upload',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_upload',
    name: 'idUpload',
    allowNull: false,
  },
});

export default UploadTag;
