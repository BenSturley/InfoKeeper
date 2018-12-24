// path_tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/path_tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-19
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const tester = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('No TestingContext provided.');
    }
    
    context.test_started = true;

    const path = require('path');

    // get path to (test) datastore file
    const fullPath 
        = 'C:\\Users\\Pete\\Documents\\_all_testing\\infokeeper_datastore\\datastore_folder_1\\data\\test-data-file.txt';

    // remove file
    const pathSepChar = '\\';
    const filenamePos = fullPath.lastIndexOf( pathSepChar );
    let dirPath = fullPath.slice( 0, filenamePos );

    // get last (parent) directory
    const parentDirname = path.dirname( fullPath ).split(path.sep).pop();
    let dirs = [];
    dirs.push( parentDirname );

    // get parent directories - method 1
    let split = fullPath;
    
    while ( split.length != 0 ) {
        split = path.dirname( dirPath ).split( path.sep ).pop();
        dirPath = dirPath.slice( 0, dirPath.length - split.length );
        dirs.push( split );
    }

    // get parent directories - method 2
    // let basename = fullPath;
    // dirs = [];
    // while ( basename.length != 0 ) {
    //     basename = path.basename( path.dirname( fullPath ));
    //     dirs.push( basename );
    // }

    // output reuslts
    const reversedDirs = dirs.reverse();
    const utils = require('../apputils');
    const arrayByLine = utils.arrayListByLine( reversedDirs );
    context.messenger.message( `Method 1: \n${arrayByLine}` );
    // context.messenger.message( `Method 2: ${basename}` );

    context.test_complete = true;
    
};

module.exports = {
    run_test:       tester,
    test_name:      'Path Tests',
    enabled:        false
};