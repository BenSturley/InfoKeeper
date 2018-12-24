// createDirectoryPathTest.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/createDirectoryPathTest.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const tester = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('No TestingContext provided.');
    }
    
    context.test_started = true;

    const pathToCreate = 'c:\\Public\\InfoKeeper\\DataStores\\Users\\Ben\\datastore\\files\\';
    context.messenger.message(`Path to create: ${pathToCreate}`);

    // get lib refs
    const fs = require('fs');
    const path = require('path');
    
    // does it exist already?
    if ( !(fs.existsSync( pathToCreate )) ) {

        // get parent directories - method 1
        let split = pathToCreate;
        let dirPath = split;
        
        // add dummy filename to end of path
        const dummyFilename = '----____dummyfilename___----dummy';
        dirPath = dirPath + path.sep + dummyFilename;

        // split path        
        let dirs = [];
        dirs = path.dirname( dirPath ).split( path.sep );
        const utils = require('../apputils');
        const dirsByLine = utils.arrayListByLine(dirs)
        context.messenger.message( `${dirsByLine}` );
    }


    context.test_complete = true;
};

module.exports = {
    run_test:       tester,
    test_name:      'Create Directory Path Test',
    enabled:        true
};