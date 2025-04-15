// const inquirer = require("inquirer");
// const figlet = require("figlet");
// const db = require("./connections");
// const { printTable } = require("console-table-printer");

// // Function to display ASCII title
// const showTitle = () => {
//     console.log(figlet.textSync("Employee Manager"));
// };

// // Function to display main menu
// const mainMenu = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "list",
//                 name: "choice",
//                 message: "What would you like to do?",
//                 choices: [
//                     "View All Employees",
//                     "View All Roles",
//                     "View All Departments",
//                     "Add Employee",
//                     "Add Role",
//                     "Add Department",
//                     "Update Employee Role",
//                     "Quit"
//                 ]
//             }
//         ])
//         .then((answer) => {
//             switch (answer.choice) {
//                 case "View All Employees":
//                     viewEmployees();
//                     break;
//                 case "View All Roles":
//                     viewRoles();
//                     break;
//                 case "View All Departments":
//                     viewDepartments();
//                     break;
//                 case "Add Employee":
//                     addEmployee();
//                     break;
//                 case "Add Role":
//                     addRole();
//                     break;
//                 case "Add Department":
//                     addDepartment();
//                     break;
//                 case "Update Employee Role":
//                     updateEmployeeRole();
//                     break;
//                 case "Quit":
//                     console.log("Goodbye!");
//                     process.exit();
//             }
//         });
// };


// // Function to view employees
// const viewEmployees = () => {
//     db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary 
//               FROM employee 
//               JOIN role ON employee.role_id = role.id 
//               JOIN department ON role.department_id = department.id`, 
//               (err, results) => {
//         if (err) throw err;
//         printTable(results);
//         mainMenu();
//     });
// };

// // Function to view roles
// const viewRoles = () => {
//     db.query(`SELECT role.id, role.title, department.name AS department, role.salary 
//               FROM role 
//               JOIN department ON role.department_id = department.id`, 
//               (err, results) => {
//         if (err) throw err;
//         printTable(results);
//         mainMenu();
//     });
// };

// // Function to view departments
// const viewDepartments = () => {
//     db.query("SELECT * FROM department", (err, results) => {
//         if (err) throw err;
//         printTable(results);
//         mainMenu();
//     });
// };

// // Function to add a department
// const addDepartment = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "name",
//                 message: "Enter department name:"
//             }
//         ])
//         .then((answer) => {
//             db.query("INSERT INTO department (name) VALUES (?)", [answer.name], (err, result) => {
//                 if (err) throw err;
//                 console.log("Department added successfully.");
//                 mainMenu();
//             });
//         });
// };

// // Function to add a role
// const addRole = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "title",
//                 message: "Enter role title:"
//             },
//             {
//                 type: "input",
//                 name: "salary",
//                 message: "Enter salary:"
//             },
//             {
//                 type: "input",
//                 name: "department_id",
//                 message: "Enter department ID:"
//             }
//         ])
//         .then((answers) => {
//             db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", 
//                      [answers.title, answers.salary, answers.department_id], 
//                      (err, result) => {
//                 if (err) throw err;
//                 console.log("Role added successfully.");
//                 mainMenu();
//             });
//         });
// };

// // Function to add an employee
// const addEmployee = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "first_name",
//                 message: "Enter employee's first name:"
//             },
//             {
//                 type: "input",
//                 name: "last_name",
//                 message: "Enter employee's last name:"
//             },
//             {
//                 type: "input",
//                 name: "role_id",
//                 message: "Enter role ID:"
//             },
//             {
//                 type: "input",
//                 name: "manager_id",
//                 message: "Enter manager ID (if applicable, else leave blank):"
//             }
//         ])
//         .then((answers) => {
//             db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
//                      [answers.first_name, answers.last_name, answers.role_id, answers.manager_id || null], 
//                      (err, result) => {
//                 if (err) throw err;
//                 console.log("Employee added successfully.");
//                 mainMenu();
//             });
//         });
// };

// // Function to update an employee role
// const updateEmployeeRole = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "id",
//                 message: "Enter employee ID:"
//             },
//             {
//                 type: "input",
//                 name: "role_id",
//                 message: "Enter new role ID:"
//             }
//         ])
//         .then((answers) => {
//             db.query("UPDATE employee SET role_id = ? WHERE id = ?", 
//                      [answers.role_id, answers.id], 
//                      (err, result) => {
//                 if (err) throw err;
//                 console.log("Employee role updated.");
//                 mainMenu();
//             });
//         });
// };

// // Start the application
// showTitle();
// mainMenu();


//  "type": "module" -->  modules are supposed to import vs const are required

import inquirer from "inquirer";
import figlet from "figlet";
import { db } from "./connections.js";
import { printTable } from "console-table-printer";

// Function to display ASCII title
const showTitle = () => {
    console.log(figlet.textSync("Employee Manager"));
};

// Function to display main menu
const mainMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "View All Roles",
                    "View All Departments",
                    "Add Employee",
                    "Add Role",
                    "Add Department",
                    "Update Employee Role",
                    "Quit"
                ]
            }
        ])
        .then((answer) => {
            switch (answer.choice) {
                case "View All Employees":
                    viewEmployees();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Quit":
                    console.log("Goodbye!");
                    process.exit();
            }
        });
};

// Function to view employees
const viewEmployees = () => {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary 
              FROM employee 
              JOIN role ON employee.role_id = role.id 
              JOIN department ON role.department_id = department.id`, 
              (err, results) => {
        if (err) throw err;
        // console.log(results.rows)
        //console.table(results.rows)
        printTable(results.rows);  // --> result is and OBJECT || the DATA we want is in the rows field (results.rows) - which is an ARRAY
         mainMenu();
    });
};

// Function to view roles
const viewRoles = () => {
    db.query(`SELECT role.id, role.title, department.name AS department, role.salary 
              FROM role 
              JOIN department ON role.department_id = department.id`, 
              (err, results) => {
        if (err) throw err;
        printTable(results.rows);
        mainMenu();
    });
};

// Function to view departments
const viewDepartments = () => {
    db.query("SELECT * FROM department", (err, results) => {
        if (err) throw err;
        printTable(results.rows);
        mainMenu();
    });
};

// Function to add a department
const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter department name:"
            }
        ])
        .then((answer) => {
            console.log(answer);
            db.query("INSERT INTO department (name) VALUES ($1)", [answer.name], (err, results) => {
                if (err){
                    console.error("Error adding department:", err, results);
                    throw err;
                } 
                console.log("Department added successfully.");
                viewDepartments();
            });
        });
};

// Function to add a role
const addRole = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "Enter role title:"
            },
            {
                type: "input",
                name: "salary",
                message: "Enter salary:"
            },
            {
                type: "input",
                name: "department_id",
                message: "Enter department ID:"
            }
        ])
        .then((answers) => {
            const { title, salary, department_id } = answers;
            db.query("INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)", 
                     [title, salary, department_id], 
                     (err, results) => {
                if (err) throw err;
                console.log("Role added successfully.");
                mainMenu();
            });
        });
};

// Function to add an employee
const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter employee's first name:"
            },
            {
                type: "input",
                name: "last_name",
                message: "Enter employee's last name:"
            },
            {
                type: "input",
                name: "role_id",
                message: "Enter role ID:"
            },
            {
                type: "input",
                name: "manager_id",
                message: "Enter manager ID (if applicable, else leave blank):"
            }
        ])
        .then((answers) => {
            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)", 
                     [answers.first_name, answers.last_name, answers.role_id, answers.manager_id || null], 
                     (err, result) => {
                if (err) throw err;
                console.log("Employee added successfully.");
                mainMenu();
            });
        });
};

// Function to update an employee role
const updateEmployeeRole = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Enter employee ID:"
            },
            {
                type: "input",
                name: "role_id",
                message: "Enter new role ID:"
            }
        ])
        .then((answers) => {
            db.query("UPDATE employee SET role_id = ? WHERE id = ?", 
                     [answers.role_id, answers.id], 
                     (err, result) => {
                if (err) throw err;
                console.log("Employee role updated.");
                mainMenu();
            });
        });
};

// Start the application
showTitle();
mainMenu();
