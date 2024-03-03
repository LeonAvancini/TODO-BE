# TODO Backend

This repository contains a simple CRUD (Create, Read, Update, Delete) backend with authentication capabilities.

## Tech Stack

- Node.js (v19.4.0)
- MongoDB (v7.0.6)
- Docker

## Getting Started

### Prerequisites

- [MongoDB](https://www.mongodb.com/docs/manual/installation/): Install MongoDB on your computer.
- [Node.js](https://nodejs.org/): Ensure Node.js is installed. If you're using `nvm`, run `nvm use` to install and use the required Node.js version (`v19.4.0`).

### Optional Dependencies
- [Docker](https://docs.docker.com/desktop/install/mac-install/) Install Docker in case you want to run it using containers
- [Nodemon](https://www.npmjs.com/package/nodemon): Install nodemon globally for hot reloading during development (`npm install --global nodemon`).

### Environment Variables

Ensure the following environment variables are set. You can find them in the `.env` file:

- `JWT_PRIVATE_KEY`: Secret key for JWT authentication.
- `DB_URI`: MongoDB connection URI.
- `PORT`: PORT where server will be exposed.

## Commands
- **Run Project**: `npm install`
  To Install project dependencies.

- **Run Project**: `npm start`
  Starts the server. If `PORT` environment variable is not modified, the server will be exposed on port `3000`.

- **Run Project in Development Mode**: `npm run dev`
  Runs the server in development mode with hot reloading (nodemon required).

- **Linting**: `npm run lint`
  Checks for linting errors.

## Running via Docker

#### Creating network (this is for share same network between the two containers `TODO-DB` and `TODO-BE`)

`docker network create todo-network`

### MongoDB

#### Download mongodb image

`docker pull mongo:7.0.6`

#### Run container (Database)

`docker run -d --name mongodb -p 27017:27017 --network todo-network --name TODO-DB mongo`

### Backend
#### Create backend docker image

`docker build -t todo-be .`

#### Run container (Backend)

`docker run -d -p 3000:3000 -e JWT_PRIVATE_KEY=todoappsecretkey -e DB_URI=mongodb://TODO-DB:27017/todoappdb --network todo-network --name TODO-BE todo-be`
:

