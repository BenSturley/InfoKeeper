// 
// app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-17
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const fileContentPath = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\app.js';

const fs = require('fs');
const fileContent = fs.readFileSync( fileContentPath, 'UTF8' );
const outputter = require('./output');
outputter.output( 'P L A N S . M D', fileContent );




