// 
// createHeader.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/datastores/createHeader.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-02
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const createHeader = function( datastoreKey ) {

    const multiline = true;

    var header = '';
    if ( multiline ) {

        var header   = '# [[Infokeeper.Datastore.Master]]'
                    += `# [[Datastore.Key="${datastoreKey}"]]`
                    += '## (reserved for future use) ##'
                    += '## (reserved for future use) ##';
    }
    else { 
        header = '[[##::= InfoKeeeper Datastore =::##]]';
    }

    const 
    return header;

};

module.exports = {
    createHeader:   createHeader
};