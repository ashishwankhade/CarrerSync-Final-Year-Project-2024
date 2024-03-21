// Import express
const express = require('express');
const cors = require("cors");
// Import mongoose
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const Timepass = require('../Backend/Model/StudentData');
const Sale =require('../Backend/Model/Sales');
const Data = require('./Model/Student');
// Import body-parser to parse request bodies
// const bodyParser = require('body-parser');
// Import routes
// const yourRoutes = require('./routes/yourRoutes');

// Initialize express app
const app = express();




app.use(cors({
  origin : ["http://127.0.0.1:5173","http://localhost:3000/"]
}))

app.get('/posts',(req,res)=>{

  //Fetch Posts from Database
  const posts = [
    {
      id : 1,
      title : "title 1",
    },
    {
      id : 2,
      title : "title 2",
    }
  ]

  
  res.json(posts);
})


app.get('/',(req,res)=>{
  res.send('Hello World Message');
})

// app.get('/studentdata',async (req,res)=>{
//   try {
//     const students = await Timepass.find({}); // Fetch all students from the database
//     console.log('Sales data:', students);// Log the fetched data to the console
//     res.json(students); // Send the data back to the client
//   } catch (error) {
//     console.error('Error fetching student data:', error);
//     res.status(500).send(error);
//   }
// })

app.get('/Dashboard/studentdata', async (req, res) => {
  try {
    const sales = await Sale.find(); // Simple find query without conditions
    console.log('Sales data:', sales);
    res.json(sales);
  } catch (error) {
    console.error('Error fetching sales data:', error);
    res.status(500).send(error);
  }
});
// app.get('/student', async (req, res) => {
//   try {
  
//     const student = await Data.find();
//    // Simple find query without conditions
//     console.log(student);
//     res.json(student);
//     res.send('hellow')
  
//   } catch (error) {
//     console.error('Error fetching sales data:', error);
//     res.status(500).send(error);
//   }
// });



// Use body-parser middleware to parse JSON bodies
// app.use(bodyParser.json());

// Database connection URL from MongoDB Atlas or local MongoDB server
// const dbURI = 'mongodb+srv://wankhadesaurabh30:ERDY3k4lXHxVKoUu@finalyearproject.cke2fsr.mongodb.net/FinalYearProject?retryWrites=true&w=majority&appName=FinalYearProject';

// const dbURI='mongodb://localhost:27017/Company/' 

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Students")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Use routes
// app.use('/api/yourEndpoint', yourRoutes);

// Define a port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
