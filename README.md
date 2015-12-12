# Node-with-WordPress-REST-API
An example Node.js app using WordPress as the backend and REST API endpoint source. Matt Mullenweg referred to this as a "reverse mullet". Party up front. Business out back.

## Requirements

- WordPress (minimum v4.4) running the [WP REST API v2](http://v2.wp-api.org/) plugin
- Node.js

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
- Visit http://localhost:3000
