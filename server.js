const express = require('express');
const app = express();




const fs = require("fs");
   

fs.readFile("db.JSON", function(err, data) {
      
   
    if (err) throw err;
   
  
    const db = JSON.parse(data);
      
    console.log(db); 
});



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/notes.html')
})



    app.listen(3000, function() {
    console.log('listening on 3000')
  })

 
