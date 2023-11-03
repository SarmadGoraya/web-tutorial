// console.log('hello world');
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation</title>
      <style>
          .navbar {
              background-color: #3e55be;
              border-radius: 19px;
          }
  
          .navbar ul {
              overflow: auto;
          }
  
          .navbar li {
              float: left;
              list-style: none;
              margin: 13px 20px;
              padding-top: 4px;
          }
          .navbar li a{
              padding: 3px 7px;
              text-decoration: none;
              color: whitesmoke;
          }
          .navbar li a:hover{
              color:yellow;
          }
          .searchbox{
              float: right;
              color: white;
              padding: 10px 77px;
              border-radius: 3px ;
          }
          .navbar input{
              border: 2px solid #b2c73acf;
              border-radius: 15px;
              padding: 5px 21px;
              width: 143px;
          }
          
      </style>
  </head>
  
  <body>
      <header>
          <div class="navbar">
              <ul>
                  <li> <a href="#"> Home</a></li>
                  <li> <a href="#"> About</a></li>
                  <li> <a href="#">Services</a></li>
                  <li> <a href="#">Contact us</a></li>
                  <div class="searchbox">
                      <input type="text" name="search" id="search" placeholder="Search Here">
                  </div>
              </ul>
          </div>
      </header>
  </body>
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});