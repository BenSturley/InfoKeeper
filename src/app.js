// 
// app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-17       - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22       - update
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// define file content path test
const testingFileContentPath = () => { 
 
    //const fileContentPath = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\app.js';
    const testFileContentPath = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\test-data-file.txt';

    const fs = require('fs');
    const fileContent = fs.readFileSync( testFileContentPath, 'UTF8' );
    const outputter = require('./output');
    outputter.output( 'P L A N S . M D', fileContent );

};

// define context test
const tesingContextTest = () => {
     
    console.log('Aquiring testing context...');
    const testingContext = require('./tests/framework/TestingFramework');

    console.log('Sending message...');
    testingContext.messenger.message(
        'This is a message from the testing context messenger.');

    console.log('Tests complete.');
 
}; 
 
// define standard tests
const runTests = () => {
 
    const run_tests = require('./tests/run_tests');
    run_tests.run();
    
};

// get globals ref
const globals = require('./globals');

// run tests if flags in globals module tell us to
if ( globals.TEST_run_test_file_content_path ) {
    testingFileContentPath();
}
if ( globals.TEST_run_test_file_tesing_context ) {
    tesingContextTest();
}
if ( globals.TEST_run_standard_tests ) {
    runTests(); 
}
