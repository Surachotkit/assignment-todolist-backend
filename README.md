# Backend

## Setup

### Install node
Installing Node.js: Visit the official Node.js website: https://nodejs.org/

## Running the code

### Install dependencies
```
npm i
```

## Setup Database

### Install MySQL
Installing MySQL: The official MySQL website: https://www.mysql.com/

### Create Database
```
CREATE DATABASE todolist_db
```
### Create Table
```
CREATE TABLE list (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(191) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

```

## Run the server
```
npm run dev
```
