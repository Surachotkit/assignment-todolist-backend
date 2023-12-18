require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const notFound = require('./middlewares/not-found')
const error = require('./middlewares/error')


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
app.use(notFound)
app.use(error)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
