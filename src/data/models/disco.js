/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const disco = Model.define('disco', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  dateOfViolation: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  action: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'disco',
});

export default disco;
