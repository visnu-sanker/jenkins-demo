module.exports = (sequelize, DataTypes) =>{

    const appointments = sequelize.define("appointments",{
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
        age: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          time: {
            type: DataTypes.TIME,
            allowNull: false,
          },
    })
    return appointments
}
