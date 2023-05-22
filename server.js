const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/routes')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected To MongoDB...`))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on : ${PORT}`))













// const router = require('./routes/routes');
// const app = express();
// require('./models/db');

// app.use('/api/tasks' , router)
// app.listen('8000' , err => {
//     if(err) console.log(err);
//     console.log('Server is started at PORT number : 8000')
// })