## run backend via docker 

### Creating network (this is for share same network between the two containers)
`docker network create todo-network`

### Database instructions

#### Download mongodb image
`docker pull mongo:7.0.6`

#### Run TODO-DB container
`docker run -d --name mongodb -p 27017:27017 --network todo-network --name TODO-DB mongo`

### Backend instructions

#### Create backend docker image
`docker build -t todo-be .`

#### Run TODO-BE container
`docker run -d -p 3000:3000 -e JWT_PRIVATE_KEY=todoappsecretkey -e DB_URI=mongodb://TODO-DB:27017/todoappdb --network todo-network --name TODO-BE todo-be`

