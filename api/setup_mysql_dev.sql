-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS Bacorex_dev_db;
CREATE USER IF NOT EXISTS 'bacorex_dev'@'localhost' IDENTIFIED BY 'Bac0rex_dev_pwd';
GRANT ALL PRIVILEGES ON `Bacorex_dev_db`.* TO 'bacorex_dev'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'bacorex_dev'@'localhost';
FLUSH PRIVILEGES;