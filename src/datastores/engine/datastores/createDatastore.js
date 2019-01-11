// 
// createDatastore.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/createDatastore.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-10           - created BS
// 2018-12-11           - updated BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// get lib refs
const fs            = require( 'fs' );
const path          = require( 'path' );
const utils         = require( '../../../apputils' );
const errorHandler  = require( '../../../errorHandler' );

const createDatastore = function( filePath ) {

    // get directory from filepath
    const dirPath = path.dirname( filePath );

    // ensure directory exists
    const dirPathExists = fs.existsSync( dirPath );

    // if parent directory exists, create directory
    if ( !dirPathExists ) {
        // create the dirs
        const dirCreator = require('./createDirectories');
        if ( dirCreator.createDirectories( dirPath ) == false ) {
            errorHandler.handleErrror( 
                new TypeError( 'Some error occurred creating the directory path for the datastore.' )
            );
        }
    }

    let valid = false;

    // create file if it doesn't exist
    let fileExists = fs.existsSync( filePath );
    if ( !fileExists ) {

        const headerCreater = require('./createHeader');
        const header = headerCreater.createHeader();

        fs.appendFileSync( filePath, header, 'utf8' );
        valid = true;
    }
  
    // return... good or bod?
    return valid;
};

module.exports = { 
    createDatastore:        dirPath
};
