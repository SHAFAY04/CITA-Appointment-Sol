import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/postgreSql'; 

const timeslots=sequelize.define ('timeslots',{
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  serviceid:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  starttime:{
    type:DataTypes.NUMBER,
    allowNull:false
  },
  endtime:{
    type:DataTypes.NUMBER,
    allowNull:false
  }
},{
  timestamps:false
});

export default timeslots;
