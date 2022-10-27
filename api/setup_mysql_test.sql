-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS Bacorex_test_db;
CREATE USER IF NOT EXISTS 'bacorex_test'@'localhost' IDENTIFIED BY 'Bac0rex_test_pwd';
GRANT ALL PRIVILEGES ON `Bacorex_test_db`.* TO 'bacorex_test'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'bacorex_test'@'localhost';
FLUSH PRIVILEGES;