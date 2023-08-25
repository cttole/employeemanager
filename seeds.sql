USE employee_db;

-- Inserting departments
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Human Resources');
INSERT INTO department (name) VALUES ('Sales');

-- Inserting roles
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 126000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('HR Manager', 165000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Executive', 95000, 3);

-- Inserting employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alice', 'Johnson', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bob', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Charlie', 'Brown', 3, 1);
