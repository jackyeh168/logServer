#! /bin/bash
docker run -e MYSQL_ROOT_PASSWORD=YourPassword --name mysql -v `pwd`/mysql:/var/lib/mysql mysql:latest
