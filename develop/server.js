const inquirer = require('inquirer');

const connection = mysqlcreateConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"password",
    database: "employee_DB"
});

function addDepartment(){

}

let initprompt = ()=>{
    inquirer.prompt ([
        {
            type: "list",
            name: "Starter",
            message:"What would you like to do?",
            choices:[
                "Add Departement","Add Role","Add Employees","View Departments","View Roles", "View Employees", "Update Employee Roles", "Quit"
                ]
            }
        ]
    ) .then(answers => {
        console.log(answers)

        switch(answers.Starter){
            case "Add Department": 
            addDepartment();
            break;
            case "Add Role":
            addRole();
            break;
            case "Add Employees":
            addEmployee();
            break;
            case "View Departments":
            viewDepartment();
            break;
            case "View Roles":
            viewRole();
            break;
            case "View Employees":
            viewEmployees();
            break;
            case "Update Employee Roles":
            employeeRoles();
            break;
            case "Quit":
            quit();
            break;






        }
    })
}
//function to add an employee
function addEmployee(){
    inquirer.prompt([
        {
        name: "firstname",
        type: "input",
        message: "Enter employees first name!"
        },
        {
        name: "lastname",
        type: "input",
        message: "Enter employees last name!"
        },
        {
        name: "role",
        type: "input",
        message: "Enter employees role!"
        }
    

    

    ])
}

initprompt();