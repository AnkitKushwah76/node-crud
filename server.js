const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
connectDB();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);

// Start the server

app.listen(PORT, ()=>{
  console.log(`server running  on port ${PORT}`);
});