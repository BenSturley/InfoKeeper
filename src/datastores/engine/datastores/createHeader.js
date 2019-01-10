// 
// createHeader.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/datastores/createHeader.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-02       - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-01-10       - update BS
 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const createHeader = function( datastoreKey ) {

    if ( datastoreKey === undefined ) {
        const uuidv4 = require('uuid/v4');
        datastoreKey = `[autogen:]${uuidv4()}`;
    }

    const multiline = true;
    let header = '';
    if (    multiline ) {
        header += '## [[Infokeeper.Datastore.Master]] ##';
        header += `\n## [[Datastore.Key="${datastoreKey}"]] ##`;
        header += '\n## (reserved for future use) ##';
        header += '\n## (reserved for future use) ##';
    }
    else {
        header = '[[##::= InfoKeeeper Datastore =::##]]';
    }

    return header;
};

module.exports = {
    createHeader:   createHeader
};