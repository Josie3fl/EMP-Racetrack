DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;
-- new database created

-- switxh to new database
\c employee_db;

-- department table: id, name
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- role table: id, title, salary, department_id
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department (id)
);



-- employee table: id, first_name, last_name, role_id, manager_id
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id  INTEGER,
    FOREIGN KEY (role_id) REFERENCES Role (id), 
    FOREIGN KEY (manager_id) REFERENCES Employee (id)
);
