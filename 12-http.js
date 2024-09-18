//NOTE - MEANT TO BE JUST A VERY BRIEF OVERVIEW OF WHAT THE HTTP MODULE ALLOWS YOU TO DO! THIS IS GOOD STUFF THOUGH!!
const http = require('http');

//THIS IS CRAZY - i went to the port on safari and it showed me the response written message! 


//createServer method  - expects call back, w arguments req (request) and res(response)
const server = http.createServer((req, res) => {

    console.log(req);  //The request and res objects are giant objects with a bunch of properties and functions relating to the current http request...
    //Here we have conditional statements checking which url the request is for (what part of the site they want!)
    if(req.url === '/') {
        res.end("Welcome to our home page");
    }
    if(req.url === '/about') {
        res.end("Here is our short history");
    }
    //Default behaviour if they don;t want a page we know - NOTICE - we can embed html in a template string which is pretty cool!
    //THIS ODESNT WORK FOR ME
    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for </p>
        <a href="/">back home</a>
        `);
    
})

//Port for server to listen to!
server.listen(3000);