import { DataTypes } from 'sequelize';
import sequelize from '../config/postgreSql'; // your Sequelize instance

const store = sequelize.define('store', {
  storeid: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  contactphone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  contactemail: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  city:{
    type: DataTypes.STRING(50),
    allowNull: false
  },
  country:{
    type: DataTypes.STRING(50),
    allowNull: false
  }
},{timestamps:false,modelName:'store',tableName:'store'});
export default store 
