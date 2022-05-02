/*const http = require ('http');

const hostname = '127.0.0.1'; //only be the same number for your computer
const port = 3000;

const server = http.createServer((req,res) => { // takes in a sever as a function, req & res are objects , whoever is making the request is the client, response is the sever
    res.statusCode = 200; // goes back to whoever is requesting it 200 meaning its good 
    const {url} = req;

    res.setHeader('Content-Type','text/plain');

    if(url == '/'){
        res.end('Home');
    }else if (url=== '/signup') {
        res.end('Sign Up')
    } else {
        res.end(url);
    }
    /*res.setHeader('Content-Type','text/plain'); // the respond back is plain text
    res.end(url) // sending back the string back Hello World*/
// });


/*const express = require('express');
const app = express();//

// you can use node  build apis , apis is how to send things back to other people 

server.listen(port, hostname, () => {  // port has to be  listed first then the hostname
    console.log(`Server running at http://${hostname}:${port}/`); // callback to do something
}); */


