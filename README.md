## Getting Started

After cloning this project,

```sh
docker build -t logserver .
docker run -d -p 3000:3000 -p 3306:3306  logserver /bin/bash /var/local/logServer/init_db.sh
```

## API example:

```sh
curl -d "user_id=jack_HashString&course=RBasic-01-Introduction&type=0&version=f3de1c3" http://serverIP:3000/api/status
```

##MySQL access example
```sh
mysql -uadmin -ppassword dataScience -h serverIp
```
