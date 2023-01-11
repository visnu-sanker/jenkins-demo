const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) =>{

    const doctors = sequelize.define("doctors",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        spl: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        exp: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        pass: {
            type: DataTypes.STRING,
            allowNull: false,
          }, 
    })

  doctors.associate = (models) =>{
    doctors.hasMany(models.appointments,{
      onDelete: "cascade"
    })
  }

    return doctors
}
