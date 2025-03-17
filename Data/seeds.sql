-- Employee list: first_name, last_name, role_id, manager_id

-- INSERT INTO Employee_db.Department (name) VALUES

INSERT INTO Employee_db.Department (name) 
VALUES ('Engineering', 'Veronica Pierce', 'Monica Spencer'),
       ('Finance', 'Keith Johnson', 'Lenore Williams'),
       ('Legal', 'Kamala Khan', 'Louise Lane'),
       ('Sales', 'Diana Prince', 'Bruce Wayne');

-- INSERT INTO Employee_db.Role (title, salary, department_id) VALUES

INSERT INTO Employee_db.Role (title, salary, department_id) 
VALUES ('Engineer', 100000, 1),
       ('Manager', 150000, 1),
       ('Accountant', 125000, 2),
       ('Lawyer', 120000, 3),
       ('Salesperson', 100000, 4);

-- INSERT INTO Employee_db.Employee (first_name, last_name, role_id, manager_id) VALUES

INSERT INTO Employee_db.Employee (first_name, last_name, role_id, manager_id) 
VALUES ('Veronica', 'Pierce', 1, 2),
       ('Monica', 'Spencer', 2, 2),
       ('Keith', 'Johnson', 3, 4),
       ('Lenore', 'Williams', 4, 4),
       ('Kamala', 'Khan', 5, 6),
       ('Louise', 'Lane', 6, 6),
       ('Diana', 'Prince', 7, 8),
       ('Bruce', 'Wayne', 8, 8);