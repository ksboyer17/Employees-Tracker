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
    updateEmployee(){
        return this.connection.query("SELECT employee.last_name")
    }
    addRole(){
        return this.connection.query(" INSERT INTO role SET")
    }
    addEmployee(){
        return this.connection.query("INSERT INTO employee SET")
    }
}
module.exports = new DB(connection);