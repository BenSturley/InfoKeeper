// -
// registerFileHeader.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/engine/datastoreRegister/creation/registerFileHeader.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-05 - - - - - - - - - - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-10 - - - - - - - - - - fixed data output
// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 

const headerCreator = function() {

    const createdDate = new Date();
    const createdData = createdDate.toDateString();
                        + createdDate.toTimeString();

    const config    = require('../config');
    const createdBy = config.registerFileCreatedBy;

    // return '--- this is the data that is to form the header ---';
    let data =    '#       ** INFOKEEPER REGISTER **         #';
    data     += '\n#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#';
    data     += '\n# infokeeper datastore register           #';
    data     += `\n# created at: ${createdData}              #`;
    data     += `\n# created by: ${createdBy}                #`;

    data     += '\n#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#';
    data     += '\n#                                         #';
    data     += '\n#    (any relevant data can go here)      #';
    data     += '\n#                                         #';
    data     += '\n#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#';

    return data;
};


module.exports = {
    headerCreator:      headerCreator
};