const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection
    }
    createDepartment(department){
        return this.connection.query("INSERT INTO department SET ?", department)
    }
    findAllDepartments(){
        return this.connection.query("SELECT departments")
    }
}
module.exports = new DB(connection);