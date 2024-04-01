// Import express
const express = require('express');
const cors = require("cors");
// Import mongoose
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const StudentData = require('../Backend/Model/StudentData');
// const Sale =require('../Backend/Model/Sales');
const User = require('../Backend/Model/userModel');
// Import body-parser to parse request bodies
const bodyParser = require('body-parser');
// Import routes
// const yourRoutes = require('./routes/yourRoutes');

// Initialize express app
const app = express();

app.use(cors());

app.use(express.json());


// app.use(cors({
//   origin : ["http://127.0.0.1:5173","http://localhost:3000/"]
// }))

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
    const sales = await StudentData.find(); // Simple find query without conditions
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

// Login Data Fetch 

app.post("/login",async (req,res)=>{

  const { email, role, password, termsAccepted } = req.body;
  console.log("Received data:", { email, role, password, termsAccepted });

  // try{
  //   const userData =await User.find();
  //   console.log(userData);
  //   console.log("datafetched",userData);
  //   res.json(userData);
  // }
  // catch (error) {
  //   console.error('Error fetching user data:', error);
  //   res.status(500).send(error);
  // }

  try {
    // Here you would perform any necessary actions with the received data
    // For example, querying the database to find a user with the provided email
    // const userData = await User.find({ email: req.body.email });
    // console.log("User Exist in database");
    // console.log("UserData", userData);
    // res.json(userData);

    console.log(req.body);

    // Placeholder response for testing
    res.status(200).json({ message: "Received data successfully" });
  } catch (error) {
    console.error('Error processing user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }



  try{
      // const userData = await User.find({ email: req.body.email });
    // console.log("User Exist in database");
    // console.log("UserData", userData);
    // res.json(userData);


  }catch (error) {
    console.error('Something Went Wrong', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Use body-parser middleware to parse JSON bodies
// app.use(bodyParser.json());

// Database connection URL from MongoDB Atlas or local MongoDB server
// const dbURI = 'mongodb+srv://wankhadesaurabh30:ERDY3k4lXHxVKoUu@finalyearproject.cke2fsr.mongodb.net/FinalYearProject?retryWrites=true&w=majority&appName=FinalYearProject';

// const dbURI='mongodb://localhost:27017/Company/' 

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Final_Year_Project")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Use routes
// app.use('/api/yourEndpoint', yourRoutes);

// Define a port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
