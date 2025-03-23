-- Employee list: first_name, last_name, role_id, manager_id

-- INSERT INTO Employee_db.Department (name) VALUES

INSERT INTO department (id, name) 
VALUES (01, 'Management'),
       (02, 'Technology'),
       (03, 'Legal'),
       (04, 'Money');
            

-- INSERT INTO Employee_db.Role (title, salary, department_id) VALUES

INSERT INTO role (id, title, salary, department_id) 
VALUES (1, 'Engineer', 100000, 02),
       (2, 'Manager', 205000, 01),
       (3, 'Accountant', 125000, 04),
       (4, 'Lawyer', 120000, 03),
       (5, 'Salesperson', 100000, 04),
       (6, 'Technician', 110000, 02),
       (7, 'Web Developer', 200000, 01),
       (8, 'Paralegal', 95000, 03);

-- INSERT INTO Employee_db.Employee (first_name, last_name, role_id, manager_id) VALUES
-- managers first 
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (007,'Diana', 'Prince', 7, NULL),
       (008,'Bruce', 'Wayne', 2, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES (001,'Veronica', 'Pierce', 1, 007),
       (002,'Monica', 'Spencer', 8, 007),
       (003,'Keith', 'Johnson', 3, 007),
       (004,'Lenore', 'Williams', 4, 008),
       (005,'Kamala', 'Khan', 5, 007),
       (006,'Louise', 'Lane', 6, 007);
       