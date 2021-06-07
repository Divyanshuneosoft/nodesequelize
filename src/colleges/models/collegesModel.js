const { DataTypes, UUIDV4 } = require('sequelize');
const database = require('../../database');
class Colleges {
    model;
    constructor() {
      this.initializeSchema()
    }
    async initializeSchema(){
        this.model = database.sequelize.define('colleges',{
            id:{
                type:DataTypes.UUID,
                defaultValue:UUIDV4,
                primaryKey:true
            },
            name:DataTypes.STRING,
            specialization:DataTypes.STRING,
            addressLine1:DataTypes.TEXT,
            addressLine2:DataTypes.TEXT,
            city:DataTypes.STRING,
            state:DataTypes.STRING,
            country:DataTypes.STRING,
            establishmentYear:DataTypes.NUMBER
        },{
            timestamps:true
        })
        await this.model.sync()
    }
}
module.exports = Colleges
