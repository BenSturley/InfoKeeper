// -
// registerFileCreator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/engine/datastoreRegister/registerFileCreator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-05 - - - - - - - - - - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
const fs = require( 'fs' );
const globals = require('../../../../globals');

const registerFileCreator = function( filePath ) {

    //
    // get a context so we can output
    const context   = require('../../../../appContext');
    const outputToContext = function( msg ) {
        context.messenger.message( msg );
    }
    context.messenger.line();
    outputToContext( '*** DATASTORE REGISTER CREATION ***' );

    //
    // get header data  -- TRY A
    const headerCreator = require('./registerFileHeader');
    const headerData = headerCreator.headerCreator(); 

    let fd;

    try {
        const config = require( '../config' );
        fd = fs.openSync( config.registerFilePath, 'a' );
        fs.appendFileSync( fd, headerData, 'utf8' );
    } 
    catch (err) {
        throw err;
    } 
    finally {
        if ( fd !== undefined )
        fs.closeSync( fd );
    }

};

module.exports = {
    createFile:         registerFileCreator
}