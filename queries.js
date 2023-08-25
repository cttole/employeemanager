const connection = require("./db");
const inquirer = require("inquirer");

function viewAllDepartments() {
  connection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
  });
}
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter the name of the new department:",
      },
    ])
    .then((answers) => {
      addDepartmentToDB(answers.departmentName);
    });
}
function addDepartmentToDB(departmentName) {
  connection.query(
    "INSERT INTO department (name) VALUES (?)",
    [departmentName],
    (err) => {
      if (err) throw err;
      console.log("Department added successfully!");
    }
  );
}
function updateEmployeeRole(employeeId, roleId) {
  connection.query(
    "UPDATE employee SET role_id = ? WHERE id = ?",
    [roleId, employeeId],
    (err) => {
      if (err) throw err;
      console.log("Employee role updated successfully!");
    }
  );
}
function viewAllRoles() {
  connection.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    console.table(results);
  });
}
function viewAllEmployees() {
  connection.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    console.table(results);
  });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "Enter the name of the new role:",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "Enter the name of the new role:",
      },
    ])
    .then((answers) => {
      addRoleToDB(answers.roleName.roleSalary); // Calls a new function to add to the database
    });
}
function addRoleToDB(roleName, roleSalary) {
  connection.query("INSERT INTO role (title) VALUES (?)",[roleName], "INSERT INTO role (salary) VALUES (?)", [roleSalary], (err) => {
    if (err) throw err;
    console.log("role added successfully!");
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "Enter the name of the new employee:",
      },
    ])
    .then((answers) => {
      addEmployeeToDB(answers.employeeName); // Calls a new function to add to the database
    });
}
function addEmployeeToDB(employeeName) {
  connection.query(
    "INSERT INTO employee (name) VALUES (?)",
    [employeeName],
    (err) => {
      if (err) throw err;
      console.log("employee added successfully!");
    }
  );
}
module.exports = {
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
};
