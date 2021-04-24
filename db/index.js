const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection
    }
    createDepartment(department){
        return this.connection.query("INSERT INTO department SET ?", department)
    }
    findAllDepartments(){
        return this.connection.query("SELECT department.id, department.name, SUM(role.salary) AS budget FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id GROUP BY department.id, department.name")
    }
    findAllEmployees(){
        return this.connection.query("SELECT employee.id, employee.last_name, employee.first_name, role.title, role salary, department.name AS department CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id")
    }
    addRole(){
        return this.connection.query(" INSERT INTO role SET")
    }
    addEmployee(){
        return this.connection.query("INSERT INTO employee SET")
    }
    viewAllEmployees(){
        return this.connection.query('SELECT employee.first_name, employee.last_name, role.salary, department.name FROM')
    }
    viewAllRoles(){
        return this.connection.query("SELECT this.updateEmployee.first_name, employee.last_name, role.title FROM")
    }
}
module.exports = new DB(connection);