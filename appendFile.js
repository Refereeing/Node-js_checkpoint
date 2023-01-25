// import file system: fs
var fs= require('fs');

//read file using appendFile ()
fs.appendFile('./welcome.txt','hello world',function(err){
    if (err) throw err;
    console.log('file is already being written');
})

// create hello.text 
// use fs.writeFile () method to create a new file

fs.writeFile('./hello.txt','hola world!',function(err){
    if (err) throw err;
    console.log('file is already being written');
});

//use readFile () method to read file on ur computer

fs.readFile('./hello.txt',function(err,data){
    if (err) throw err;
    console.log("The content of the file is:" + data);
});
