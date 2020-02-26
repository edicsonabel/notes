# Notes
[![version](https://img.shields.io/github/v/release/edicsonabel/notes)](../../releases/latest)
[![issues](https://img.shields.io/github/issues/edicsonabel/notes)](../../issues)
[![forks](https://img.shields.io/github/forks/edicsonabel/notes)](../../network/members)
[![stars](https://img.shields.io/github/stars/edicsonabel/notes)](../../stargazers)
[![license](https://img.shields.io/github/license/edicsonabel/notes)](/LICENSE)

<a href="https://github.com/edicsonabel/notes">
  <img src="https://raw.githubusercontent.com/edicsonabel/assets/master/gif/notes-app.gif" alt="Notes App" width="100%">
</a>

This application allows you to access a personal account and make reminder notes of your tasks. Having a space in this world called internet that allows you to remember what you have to do.
- create/read/update/delete Notes (CRUD).
- Allows a user to do log in and save his personal notes.

## :muscle: Getting Started
To install this application, you must first create the necessary environment variables for its use. We can do this by creating an `.env` file at the root of the project and declaring the variables there.

### Environment Variables
In the `.env` file we must declare the following variables.
- `MONGODB_HOST` this is the Mongodb URI string
- `MONGODB_DB` Mongodb database name
```
MONGODB_HOST='localhost'
MONGODB_DB='notes'
```
These variables will be used to set the address of MongoDB to connect to the database.
```js
/*  FILE src/database.js  */
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DB}`
```

### Installation
After having declared the environment variables, we can perform the installation of the necessary modules for the project with the command:
```
npm install
```
When resetting the modules, we have to have started the MongoDB service or start it with the command:
```
mongod
```
Then start our project with the command:
```
npm start
```
