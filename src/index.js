const express = require('express')
const app = express()
const port = 3000;
const connectDB= require('../config/db')
const userRouter= require('../routes/index');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1',userRouter);
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  
});