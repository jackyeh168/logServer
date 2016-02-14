## Getting Started

After cloning this project,

```sh
docker build -t logserver .
docker run -d -p 3000:3000 -p 3306:3306  logserver /bin/bash /var/local/logServer/init_db.sh
```

## API example:
#### 1. Insert record
```sh
curl -d "user_id=jack_HashString&course=RBasic-01-Introduction&type=0&version=f3de1c3" http://serverIP:3000/api/status
```
The response is
```javascript
{
	"result": 1
}
```
#### 2. Get the last few records
```sh
curl -d "num=2" http://serverIP:3000/api/getManyRecords
```
The response is
```javascript
[{
	"id": 6,
	"user_id": "jack_HashString",
	"course": "RBasic-01-Introduction",
	"version": "f3de1c3",
	"type": 0,
	"created_at": "2016-02-14T02:23:01.000Z"
}, {
	"id": 5,
	"user_id": "jack_HashString",
	"course": "RBasic-01-Introduction",
	"version": "f3de1c3",
	"type": 0,
	"created_at": "2016-02-14T02:23:00.000Z"
}]
```
#### 3. Get the records by user_id
```sh
curl -d "user_id=jack_HashString" http://serverIP:3000/api/getRecordsByUserId
```
The response is
```javascript
[{
	"id": 2,
	"user_id": "jack_HashString",
	"course": "RBasic-01-Introduction",
	"version": "f3de1c3",
	"type": 0,
	"created_at": "2016-02-14T02:23:01.000Z"
}, {
	"id": 1,
	"user_id": "jack_HashString",
	"course": "RBasic-01-Introduction",
	"version": "f3de1c3",
	"type": 0,
	"created_at": "2016-02-14T02:23:00.000Z"
}]
```
##MySQL access example
```sh
mysql -uadmin -ppassword dataScience -h serverIp
```
