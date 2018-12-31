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

        const TESTING_normal = true;
        const TESTING_drives = true;

        if ( TESTING_normal ) {

            context.messenger.info( '** RUNNING STANDARD PATH TESTS **' );

            const path = require('path');

            // get path to (test) datastore file
            const fullPath 
                = 'C:\\Users\\Pete\\Documents\\_all_testing\\infokeeper_datastore\\datastore_folder_1\\data\\test-data-file.txt';

            // remove file
            const pathSepChar = path.sep;
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

            // output results
            const reversedDirs = dirs.reverse();
            const utils = require('../apputils');
            const arrayByLine = utils.arrayListByLine( reversedDirs );
            context.messenger.message( `Method 1: \n${arrayByLine}` );
            // context.messenger.message( `Method 2: ${basename}` );
        
            context.messenger.info( '** COMPLETED STANDARD PATH TESTS **' );
        }

        if ( TESTING_drives ) {
            
            context.messenger.info( '** STARTED DRIVE PATH TESTS **' );

            // path.parse('C:\\path\\dir\\file.txt');
            // Returns:
            // { 
            //   root: 'C:\\',
            //   dir: 'C:\\path\\dir',
            //   base: 'file.txt',
            //   ext: '.txt',
            //   name: 'file' 
            // }

            const pathTest = 'c:\\Public\\';

            context.messenger.info( '** COMPLETED DRIVE PATH TESTS **' );
        }

        context.test_complete = true;
        
    };

    module.exports = {
        run_test:       tester,
        test_name:      'Path Tests',
        enabled:        true,
    };