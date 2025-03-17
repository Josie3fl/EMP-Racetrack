DROP DATABASE IF EXISTS Employee_db;

CREATE DATABASE Employee_db;
-- new database created
USE Employee_db;

-- department table: id, name
CREATE TABLE Department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- role table: id, title, salary, department_id
CREATE TABLE Role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department (id)
);



-- employee table: id, first_name, last_name, role_id, manager_id
CREATE TABLE Employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id  INTEGER,
    FOREIGN KEY (role_id) REFERENCES Role (id), 
    FOREIGN KEY (manager_id) REFERENCES Employee (id)
);
