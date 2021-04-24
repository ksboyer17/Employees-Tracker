const inquirer = require('inquirer');
let mysql = require('mysql');
const db = require('./db');



function addRole(){
    inquirer.prompt([
        {
        name: "Role",
        type: "input",
        message:"What is the Role name?"
        },
        {
        name: "Salary",
        type: "input",
        message:"What is the the Salary?"
        }
    ])
    .then((department)=> {
        db.addRole(department)
    })
}

let initprompt = ()=>{
    inquirer.prompt ([
        {
            type: "list",
            name: "Starter",
            message:"What would you like to do?",
            choices:[
                "Add Department","Add Role","Add Employees","View Departments","View Roles", "View Employees", "Update Employee Roles", "Quit"
                ]
            }
        ]
    ) .then(answers => {
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
            viewDepartments();
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

async function viewDepartments() {
    const departments = await db.findAllDepartments();
    console.table(departments);
    initprompt();
}

function addDepartment(){
    inquirer.prompt([
        {
            name:"name",
            type: "input",
            message: "Enter the name of the new department!"
        }
    ])
    .then( async (department) => {
        await db.createDepartment(department);
        console.log(`Added ${department.name} to the Database`);
        initprompt();
    })
}

initprompt();