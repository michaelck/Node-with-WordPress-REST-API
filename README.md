# Node-with-WordPress-REST-API
A basic example of a Node.js app using WordPress / WP REST API endpoints for the data source. Matt Mullenweg referred to this as a "reverse mullet" at WordCampUS 2015. Party up front. Business out back.

## Requirements

- WordPress (minimum v4.4) running the [WP REST API v2](http://v2.wp-api.org/) plugin
- [Node.js](https://nodejs.org/). The following modules are required:
    - [Express](http://expressjs.com/) - Application framework
    - [Jade](http://jade-lang.com/) - Node template language
    - [Path](https://nodejs.org/docs/latest/api/path.html) - utilities for handling and transforming file paths
    - [HTTP](https://nodejs.org/docs/latest/api/http.html)

## Example Routes
### [http://localhost:3000/](http://localhost:3000/)
Returns all public posts on a WordPress site.

### [http://localhost:3000/post-id-number](http://localhost:3000/)
Returns a single public WordPress post

## Getting up and running

- Download or clone this repository
- Navigate to the repository directory in the terminal
- Run ```npm install```
- Create a config file with the following command: ```touch config.js```
- Modify the following sample to meet your needs and add it to your config.js file:

```   
var config = {};

config.wpUrl = 'example.com';
config.listen = 3000;

module.exports = config;
```
- Run the app with the following command: ```node index.js```
- Visit [http://localhost:3000](http://localhost:3000)
