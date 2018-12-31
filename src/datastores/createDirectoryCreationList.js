// createDirectoryCreationList.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/createDirectoryCreationList.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-26
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Creates list of test files to pass intp
//  
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const listCreator = function( pathToPeek ) {

    const globals = require('../');

    const fs = require('fs');
    const exists = fs.existsSync( pathToPeek );
    if ( !exists ) {
        throw new Error( `Path for tests must exist: "${pathToPeek}"` );
    }

    let returnValue = false;
    if ( fs.existsSync( ) ) {
        //
    }

};

module.exports = {
    create_list:    listCreator,
};