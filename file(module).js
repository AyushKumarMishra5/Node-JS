const { error } = require("console");
const fs = require("fs");

fs.readFile('file.txt', 'utf-8', (error, data)=>{
    console.log(error, data)
})

const a=fs.readFileSync("file.txt"); // this bascially reads the data from the file present in the text file.
console.log(a,toString(a));


const b=fs.writeFile("file2.txt", "this is the data",()=>{      // this function allows you to wrote the data in the file
    console.log("Written in that file.")                        // in the format (file name, data , callback function)
})

const c=fs.writeFileSync("file2.txt", "Hello my name is ayush, How are you")


console.log("Done i am able to understand node js.")

// here first the code will run after that the callback function will be able to run. 
// So it is not a good practice to write any logic or code below the callback functions because you don't know when and if the
// so it is called asynchronous programming because we are not waiting for the file to load completely but just giving a request to load and then doing other
// because of the non blocking nature of nodejs.