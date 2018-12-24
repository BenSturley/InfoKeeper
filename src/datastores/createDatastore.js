// 
// createDatastore.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/createDatastore.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-19
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const createDatastore = function( filePath ) {

    const fs = require('fs');
    const path = require('path');

    // get directory from filepath
    const dirPath = path.dirname( filePath );

    // ensure directory exists
    const dirPathExists = fs.existsSync( dirPath );

    // if parent directory exists, create directory
    if ( !dirPathExists ) {

        

    }

    // create data file


};

module.exports = createDatastore;