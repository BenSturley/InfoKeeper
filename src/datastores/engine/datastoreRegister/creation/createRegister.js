// -
// createRegister.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/datastoreTracker/createRegister.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-05 - - - - - - - - - - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
const globals = require('../../../../globals');
const createRegister = function() {
    
    //
    // get a context so we can output
    const context = require('../../../../appContext');
    const outputToContext = function( msg ) {
        context.messenger.message( msg );
    }
    context.messenger.line();
    outputToContext( '*** DATASTORE REGISTER CREATION ***' );

    //
    // grab the config -- TRY B
    const config = require('../config');
    
    //
    // value to return - default to BAD
    let rv = true;

    // create directories
    try {

        //
        // get directory paths we need
        const registerDirPath = config.registerDirectoryPath;
        output = registerDirPath;
        msg = `** Creating directories: "${output}"`;
        outputToContext( msg );
        
        //
        // get directory creator and attempt creation of directories
        const dirCreator = require( '../../datastores/createDirectories' );
        dirCreator.createDirectories( registerDirPath );
    } 
    catch (err) {
        //globals.handle_error( err );
        rv = false;
    }   

    // create the file
    if (rv) {
        try {

            //
            // get the file path
            const registerFilePath = config.registerFilePath;

            //
            // create the file
            const registerCreator = require('./registerFileCreator');
            registerCreator.createFile( registerFilePath );
            
        }
        catch (err) {
            //globals.handle_error( err );
            throw err;
        }
    }


    //
    // return success (or not)
    return rv;

};

module.exports = {
    createRegister:     createRegister
};