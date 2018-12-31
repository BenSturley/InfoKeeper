// 
// createTestsList.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/framework/createTestsList.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-25
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const createList = () => {

    //
    // flags
    const OUTPUT_FILE_STATS     = false;
    const OUTPUT_EACH_FILE      = true;

    console.log('Creating test files list.');
    
    // get lib refs
    const fs            = require('fs');
    const path          = require('path');
    const errorHandler  = require('../../errorHandler');
    const context       = require('./TestingFramework');
    
    // find test files
    const dirPath = path.join( __dirname, '../' );

    // read filenames from directory
    const testDirFiles = fs.readdirSync( dirPath, 'utf8' );
    
    const files     = [];
    // const testFiles = [];
    let testFileRef = '';
    const testFiles = [];
    testDirFiles.forEach(

        f => {

            // get full file path (f just returns filenme.ext)
            const filePath = path.join( dirPath, f );
            let validTest = false;
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
                
                if ( stats.isFile() ) {
                    validTest = true;
                    if ( stats.isDirectory() ) {
                        validTest = false;
                    }
                }

                if ( validTest ) {
                    files.push( testFileRef );
                }
                
            }
            catch (err) {
                errorHandler( err );
            }

            // check it isn't this file
            if ( filePath.indexOf( 'run_tests.js' ) > -1 ) {
                if ( validTest ) {
                    if ( filePath.toLocaleLowerCase() == __filename.toLocaleLowerCase() ) {
                        validTest = false;
                    }
                }
            }

            // add to results
            if ( validTest ) {
                const resultObj = 
                    { 
                        file:       f, 
                        valid:      validTest, 
                        refPath:    `./${f}`,
                        fullPath:   filePath,
                    };
                testFiles.push( resultObj );
        
                if ( OUTPUT_EACH_FILE ) {
                    context.messenger.message( `FILE    : ${resultObj.file}` );
                    context.messenger.message( ` valid  : ${resultObj.valid}` );
                    context.messenger.message( ` ref    : ${resultObj.refPath}` );
                    context.messenger.message( ` path   : ${resultObj.fullPath}` );
                    context.messenger.line();
                }

                // add test file to collection
                files.push( f );
            }
            
        });

    console.log('Finished test files list.');

    return testFiles;

};

module.exports = {
    create_list:    createList
};