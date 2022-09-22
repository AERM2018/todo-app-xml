const {Sequelize, Model, DataTypes} = require('sequelize');
module.exports = (sequelize,datatypes) => {
    
    class Todo extends Model {}
    
    Todo.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        }
    },{sequelize:sequelize,timestamps:false})

    return Todo
};


