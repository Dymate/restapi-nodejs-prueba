CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INTEGER (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1,'Dylan', 1000),
(2,'Maria', 2000),
(3,'Floky',2500),
(4,'Max',1200); 

SELECT * FROM employee WHERE id = 1;


DELETE FROM employee WHERE id = 2;