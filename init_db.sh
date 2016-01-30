#!/bin/bash
chown mysql /var/lib/mysql
service mysql restart
mysql -u root -e "create database if not exists dataScience"
mysql -u root  dataScience < /var/local/logServer/MySQL/dataScience.sql
mysql -u root -e "CREATE USER 'admin'@'%' IDENTIFIED BY 'password';"
mysql -u root -e "GRANT ALL ON *.* TO admin@'%' IDENTIFIED BY 'password' WITH GRANT OPTION"
mysqladmin flush-privileges -uroot
service mysql restart
npm start 
