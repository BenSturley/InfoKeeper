// -
// checkRegisterExists.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/engine/datastoreRegister/checkRegisterExists.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-05 - - - - - - - - - - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
const checkRegisterExists = function() {

    var creationSuccessful = false;
    var registerFileExists = false;

    //
    // grab the config
    const fs                = require('fs');
    const config            = require('./config');
    const context           = require('../../../appContext');
    const registerCreator   = require('./creation/createRegister');

    //
    // get a context so we can output
    const outputToContext = function( msg ) {
        context.messenger.message( msg );
    }
    context.messenger.line();
    let output = '*** DATASTORE REGISTER EXISTENCE CHECK ***';
    let msg = output;
    outputToContext( msg );

    //
    // get register file path
    const registerFilePath = config.registerFilePath;
    output = registerFilePath;
    msg = `** Register file path: "${output}"`;
    outputToContext( msg );

    //
    // check it exists
    registerFileExists = fs.existsSync( registerFilePath );
    output = registerFileExists.toString().toUpperCase();
    msg = `** Register file exists: ${output}`;
    outputToContext( msg );

    //
    // create it if it doesn't exist
    if ( !registerFileExists ) {
        
        //
        // quick output
        msg = `Register file does not exist. Attempting to create: "${registerFilePath}"`;
        outputToContext( msg );

        // get creator and run creation routine, hopefully getting TRUE back
        creationSuccessful = registerCreator.createRegister();
        if ( !creationSuccessful ) {
            throw new Error( 'Unable to create datastore register.' );
        }
    }

    return registerFileExists;

};

module.exports = {
    checkRegisterExists:    checkRegisterExists
}