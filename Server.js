const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql')

//Express middleware
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(port, ()=>{
    console.log('Server running on port $(PORT)');
});
