const fs= require("fs");

// create a blank file
fs.writeFile("student.txt", "Hello,this is a student file", (err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("File is successfully created");
  }
});

//Read a file
fs.readFile("student.txt", "utf-8", (err, data) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("Hello,this is a student file");
    console.log(data);
  }
}); 

//Update a file
fs.appendFile("student.txt", " for CSE student", (err) => {
    if (err){
      console.log(err);
    }
    else{
      console.log("file successfully created");
    }
});

//Delete a file
fs.unlink("student.txt", (err) => {
  if (err) throw err;
  else{
    console.log("File successfully deleted");
  }
}); 
























