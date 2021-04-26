steps

1. npm i
2. node app.js

routes
POST http://localhost:3000/tasks
Content-Type: application/json

{
"id":1,
"project":"new api assignment",
"task":"new task",
"hours":[{
"start":"25 April",
"end":"25 April 2021"
},{
"start":"25 April",
"end":"25 April 2021"
},{
"start":"25 April",
"end":"25 April 2021"
}],
"date":"26 April 2021"
}

GET http://localhost:3000/tasks/:task
