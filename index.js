const inquirer = require("inquirer");
const {
  viewAllDepartments,
  addDepartment,
  updateEmployeeRole,
  viewAllRoles,
  viewAllEmployees,
  addRole,
  addEmployee,
  addDepartmentToDB,
  addEmployeeToDB,
  addRoleToDB,
} = require("./queries");

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Exit":
          connection.end();
          return;
      }
      mainMenu(); // Return to the main menu
    });
    
}

mainMenu()
 