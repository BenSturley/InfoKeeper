// 
// run_tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/run_tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

const test_runner = () => {

    //
    // flags
    const OUTPUT_FILE_STATS = false;    //true;

    console.log('**** TESTS PROCEDURE STARTED ****');
    
    // get lib refs
    const fs            = require('fs');
    const path          = require('path');
    const errorHandler  = require('../errorHandler');
    const context       = require('./framework/TestingFramework');
    
    // find test files
    const dirPath = __dirname;

    // read filenames from directory
    const testDirFiles = fs.readdirSync( dirPath, 'utf8' );
    
    const testFiles = [];
    testDirFiles.forEach(
        f => {
            // get full file path (f just returns filenme.ext)
            const filePath = path.join( __dirname, f );
            try {
                // get file stats
                const stats = fs.lstatSync( filePath );

                // create (debug) output
                const outputStats = () => {
                    console.log(`FILEPATH: ${filePath}`);
                    console.log(`Is file: ${stats.isFile()}`);
                    console.log(`Is directory: ${stats.isDirectory()}`);
                    console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
                    console.log(`Is FIFO: ${stats.isFIFO()}`);
                    console.log(`Is socket: ${stats.isSocket()}`);
                    console.log(`Is character device: ${stats.isCharacterDevice()}`);
                    console.log(`Is block device: ${stats.isBlockDevice()}`);    
                };
                if ( OUTPUT_FILE_STATS ) {
                    outputStats();
                }
                let validTest = true;
                
                if ( stats.isFile() ) {
                    validTest = true;
                    if ( stats.isDirectory() ) {
                        validTest = false;
                    }
                }

                if ( validTest ) {
                    const testFileRef = `./${filePath}`;
                    testFiles.push( testFileRef );
                }
                
            }
            catch (err) {
                errorHandler( err );
            }

            // check file isn't this one
            
            context.messenger.message( `THIS FILE: ${f}` )

            // add test file to collection
            testFiles.push( f );
            
        });

    testFiles.forEach(
        f => {
            const testFilepath = `./${f}`;
            console.log( `FILE: ${testFilepath}` );
        }
    );

    console.log('**** TESTS: TESTS PROCEDURE COMPLETED ****');

};

module.exports = {
    run:    test_runner
};