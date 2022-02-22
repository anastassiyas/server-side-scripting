// Core node package for reading and writing files


// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file

  // If the code experiences any errors it will log the error to the console.
 

  // Otherwise, it will print: "movies.txt was updated!"
  
// Core node package for reading and writing files


// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file

  // If the code experiences any errors it will log the error to the console.
var fs = require("fs");
  // Otherwise, it will print: "movies.txt was updated!"
  fs.writeFile('webster.txt', 'Inseption, Die Hard', function (error) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data
   
    // Then split it by commas (to make it more readable)
   
  
    // We will then re-display the content as an array for later use.
    console.log('movies.txt was updated!');
  
  });  
