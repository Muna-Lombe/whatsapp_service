require('dotenv').config()
const jwt = require('jsonwebtoken');

var token = jwt.sign({name: 'moorhouseENT'}, process.env.JWT_KEY);
console.log('Use the following JWT to make request to this service -> \n', token);
