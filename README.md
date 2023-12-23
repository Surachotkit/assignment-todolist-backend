# Backend

## Setup

### Install node

```
npm install node
```

## Running the code

### Install dependencies
```
npm i
```

### Setup Database for local

# create Database
```
CREATE DATABASE todolist_db
```
# Create Table
```
CREATE TABLE list (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(191) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

```

### Run the server
```
npm run dev
```