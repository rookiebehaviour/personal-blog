---
title: Basics of Server Side Rendering - Express, EJS, and Node.js
date: '2022-07-11'
tags: ['ESJ', 'Express']
images: ['/static/images/postImages/taylor-vick-M5tzZtFCOfs-unsplash.jpg']
draft: false
summary: This is a basic introduction of the server side rendering. We look at how Node.js and Express are used to create a web server. We will also look at how EJS is used to create a templating engine.
---

Recall how to make a basic server:

```js
const http = require('http')
const PORT = 8080

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  const responseText = `Requested Path: ${request.url}\nRequest Method: ${request.method}`
  response.end(responseText)
}

const server = http.createServer(requestHandler)

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`)
})
```

# Web Servers

## What is a web server?

In general, a server has data, and a client want data from the server.

- serve web appropriate files: video, images, HTML, CSS, etc.
- web servers run on HTTP and HTTPS protocols

### HTTP

HTTP is a request/response system. The client sends a request to the server, and the server responds with a response.

HTTP is built on top of TCP/IP. TCP/IP is a connection-oriented protocol. HTTP **sits on top of** TCP/IP.

Each request can only have one response.

A Server needs:

- a port to listen on
- ip address (host)

Think of the IP address as a street address. The port is like apartment number of that building on the street.

Localhost is a special IP address. It is the IP address of the **computer running the server**.

#### Request

Every request has two parts:

- verb - describes what we want to do
  - GET, POST, PUT, DELETE, PATCH, etc.
  - GET - retrieve data from the server
  - POST - send data to the server
- path - describes the resource we want to access
  - `/` - the root of the server
  - `/about` - the about page

#### Response

- May or may not have a body

| response code | description                                             |
| ------------- | ------------------------------------------------------- |
| 100's         | routing protocols. Won't be seeing this in this course. |
| 200's         | everything is OK                                        |
| 201           | created                                                 |
| 202           | accepted                                                |
| 300's         | redirects. The thing you're looking for is not here.    |
| 400's         | bad request                                             |

```js
// see example
const http = require('http')
const PORT = 12345
```

Only difference from last week is we are listening for a 'request' event.

Node js docs on creating a server: [here](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)

#### Simple Server Example with Node.js

A basic web server built using **Node's** [http module](https://nodejs.org/api/http.html)

```js
const http = require('http')
const PORT = 8080

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  // if path is '/'
  if (request.url === '/') {
    response.end('Welcome!\n')
    // if path is '/url'
  } else if (request.url === '/urls') {
    response.end('www.google.com\nwww.facebook.com\n')
    // if path is not defined
  } else {
    // send status code 404
    response.statusCode = 404
    response.end('404 Not Found\n')
  }
}

// create the server
const server = http.createServer(requestHandler)
console.log('Server created') // NEW LINE

// start the server listening on the specified port
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`)
})
```

How can we tell what the client is asking for? We wll use the `request` object.

The most important information is the **URL** and the **method**.

# Express

[Express website](http://expressjs.com/)

Unopinionated: what does that mean? The creator has not made any restrictions on the way you can use this library (what you name files, what you can do with them, etc.).

```js
// basic Express server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('thanks for visiting "/"')
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
```

The callback functions tells the app what to d with the `req`uest and `res`ponse object it will return.

The request object from express is the exact same as the request object from node.js. Express is just a wrapper around node.js.

`res.send()` is the same as `res.write()` and `res.end()` combined.

```js
res.send('Hello World')
```

This is much more simple compared to the built in methods in node.js.

Order of the `app.get` is **important!**. Express works top down. You want the **specific routes** above the **general** routes.

# Middleware

Is not exclusive to express. It can be used with any web server.

Middleware is code that runs between two things, the `request` and the `response`.

[Popular express middleware](https://expressjs.com/en/resources/middleware.html)

An example of what middleware is doing is:

- parsing the request body
- validating the request body
- converting the request body to a JSON object

We can do this ourselves, but we can also use third party middleware.

Anytime we use `app.use`, we are using middleware. It accepts `(req, res) => {}` as a callback.

We can also pass in `next` in the callback to tell the middleware to move on to the next middleware. `next` simple says, "I am done with this middleware, move on to the next one."

Middleware will not create an entirely new request/response object. It will just modify the request/response object. It gets passed **in** a `req` and `res` object, modifies it, then passes it to the next middleware or some other route.

Example of middleware used in express:

```js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

// let Express know to use the middleware
app.use(bodyParser.urlEncoded({ extended: false }))
app.use(morgan('dev'))
```

## Custom Middleware

- We are not limited to using middleware that someone else has written, we can create our own!
- To define custom middleware, we pass a **callback** function to the `.use` method
  - The callback function is passed the `req` and `res` objects as well as a special function next which our custom middleware will call to indicate that the middleware has finished running

Example:

```js
app.use((req, res, next) => {
  // do something with the request and/or response objects
  console.log(`New request: ${req.method} ${req.url}`)

  // call the next step in the middleware chain
  next()
})
```

See express documents for more information: [here](https://expressjs.com/en/guide/writing-middleware.html)

## Morgan Middleware

Check out [Morgan](https://www.npmjs.com/package/morgan) for a middleware that logs requests. The [dev](https://www.npmjs.com/package/morgan#dev) version of Morgan is very useful. Will show the method, URL, and status code.

```js
const morgan = require('morgan')

// need to configure it
app.use(morgan('dev'))
```

> can easily get the status codes, any incoming requests, and the time it took to respond.

## More on Express

Some more examples:

```js
const express = require('express')
const app = express()
const PORT = 8080 // default port 8080

const urlDatabase = {
  b2xVn2: 'http://www.lighthouselabs.ca',
  '9sm5xK': 'http://www.google.com',
}

app.get('/', (req, res) => {
  res.send('Hello!')
})

// sending json data
app.get('/urls.json', (req, res) => {
  res.json(urlDatabase)
})

// sending HTML
app.get('/hello', (req, res) => {
  res.send('<html><body>Hello <b>World</b></body></html>\n')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
```

What if we create a variable in one of our routes? Can we access it in another?

```js
// variable created in the function
app.get('/set', (req, res) => {
  const a = 1
  res.send(`a = ${a}`)
})

// trying to access the variable created in the function
app.get('/fetch', (req, res) => {
  res.send(`a = ${a}`)
})
// results in an error 'a is not defined'
```

> No. The variable is only accessible in the function. This is due to scope!

# Template Engines

Templates are a way to create HTML files. It keeps the HTML and JavaScript separate.

We can define our HTML in a separate file from the JavaScript.

Template engine's replace variables in a template file with actual data, and transforms the template into an HTML file sent to the client (that is, the browser).

Some template engines are:

- [Ejs](https://www.npmjs.com/package/ejs)
- [Handlebars](https://www.npmjs.com/package/handlebars)
- [Mustache](https://www.npmjs.com/package/mustache)
- [Nunjucks](https://www.npmjs.com/package/nunjucks)
- [Pug](https://www.npmjs.com/package/pug)

We will be using [Ejs](https://www.npmjs.com/package/ejs)

Check out the following article to get started with EJS: [EJS](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)

We'll be using: `<%- include('partials/_header') %>`

Check out this video to better understand how to use EJS: [EJS](https://www.youtube.com/watch?time_continue=566&v=dmJ9s6x_GmM&feature=emb_title)

## EJS

When sending variables to an EJS template, we need to send them inside an object, even if we are only sending one variable. This is so we can use the key of that variable to access the data within our template.

```js
app.get('/hello', (req, res) => {
  const templateVars = { greeting: 'Hello World!' }
  res.render('hello_world', templateVars)
})
```

- `templateVars` contains the variables we want to pass to the template. It uses the string `greeting` key to access the data.

In a separate file, in the **views** folder, we can create a file called `hello_world.ejs`.

```html
// This would display the string "Hello World!"
<h1><%= greeting %></h1>
```

We use the `<%=` tag to display the variable. Close the tag with `%>`.

Example:

```html
// This line will not show up on the page <% if(greeting) {%> // This line will only show if
greeting is truthy
<h1><%= greeting %></h1>
<% }%>
```

Handling route parameters: [here](https://expressjs.com/en/guide/routing.html#route-parameters)

Here we are using the `:` symbol to indicate that this is a route parameter.

For example, if the id of a shortened URL was `b2xVn2`, then the path to access it would look like `/urls/b2xVn2` in the browser.

Further, the value of `req.params.id` would be `b2xVn2`.

```js
const urlDatabase = {
  b2xVn2: 'http://www.lighthouselabs.ca',
  '9sm5xK': 'http://www.google.com',
}

// route to render "/urls" page
app.get('/urls/:id', (req, res) => {
  // data to pass to the ejs file
  let templateVars = {
    id: req.params.id,
    longURL: urlDatabase[req.params.id],
  }
  res.render('urls_show', templateVars)
})
```

```html
<main style="margin: 1em;">
  <h3>My URLs</h3>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Short URL ID</th>
        <th scope="col">Long URL</th>
      </tr>
    </thead>
    <tbody>
      <% for (let id in urls) { %>
      <tr>
        <td><%= id %></td>
        <td><%= urls[id] %></td>
      </tr>
      <% } %>
    </tbody>
  </table>
</main>
```

### EJS Partials

- create a folder inside of the **views** folder called **partials**
- add a file called **\_header.ejs**

Need to import the file into the main ejs file: `<%- include('partials/_header') %>`

```html
//...
<body>
  <%- include('partials/_header') %>
  <main style="margin: 1em;">
    <h3>My URLs</h3>
    <table class="table">
      //...
    </table>
  </main>
</body>
```

> needs to be inside of the `<body>` tag

See the following repo for full details: [Getting started with EJS](https://github.com/Cwarcup/tinyapp/tree/a368f3a4749d6767bb9409f5bb02d8f404571fe7)

In this exercise we learned how to use the EJS templating engine to render web pages.

We used the Express render method to respond to requests by sending back a template, along with an object containing the data the template needs. We then used EJS to render this data to our web page. We used Express route parameters to pass data from our frontend to our backend via the request url. Finally, we created a partial template for our header so that we can have the code for it in one location, but render it on multiple pages.

Learning Outcomes:

- Add route for `/urls` in `expressserver.js` and render using accompanying template
- Add route for `/urls/:id` in `expressserver.js` and render using accompanying template
- Include the header **partial** inside `urls_index.ejs` and `urls_show.ejs.` Make sure this is included inside the top of the **body**