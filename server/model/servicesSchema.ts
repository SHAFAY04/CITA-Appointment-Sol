import { DataTypes } from 'sequelize';
import sequelize from '../config/postgreSql'; // your Sequelize instance

const services = sequelize.define('services', {
  serviceid: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  storeid:{
  type: DataTypes.STRING(10),
  allowNull:false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  rate:{
    type:DataTypes.NUMBER,
    allowNull:false
  },
  discount:{
    type:DataTypes.NUMBER,
    allowNull:false
  },
  duration:{
    type:DataTypes.NUMBER,
    allowNull:false
  },
  category:{
    type:DataTypes.STRING(50),
    allowNull:false
  },
  image:{
    type:DataTypes.STRING,
    allowNull:true,

  },
  extraInfo:{
    type:DataTypes.STRING,
    allowNull:true
  },
  starthour:{
    type:DataTypes.NUMBER,
    allowNull:false
  },
endhour:{
    type:DataTypes.NUMBER,
    allowNull:false
  },
  isActive:{
    type:DataTypes.BOOLEAN,
    allowNull:false
  },
  tags:{
    type:DataTypes.ARRAY(DataTypes.STRING),
    allowNull:false
  }
    

},{timestamps:false,modelName:'services',tableName:'services'});
export default services 
