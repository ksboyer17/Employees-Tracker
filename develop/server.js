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
                
        }
    })
}

initprompt();