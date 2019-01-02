// 
// app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-17       - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22       - update
// ~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
//
// get globals ref
const welcomeMsgs  = require('./welcomeMessages');
const globals       = require('./globals');
globals.TEST_run_test_file_content_path();


//
// welcome messages
//
if ( welcomeMsgs.run_welcome ) {
    welcomeMsgs.run_welcome();
}

//
// define file content path test
const testingFileContentPath = () => { 
 
    //const fileContentPath = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\app.js';
    const testFileContentPath = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\test-data-file.txt';

    const fs = require('fs');
    const fileContent = fs.readFileSync( testFileContentPath, 'UTF8' );
    const outputter = require('./output');
    outputter.output( 'P L A N S . M D', fileContent, true );

};

// 
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

// current test
if ( globals.TEST_run_current_test ) {
    const test = require('./tests/createDirectoryPathTest');
    const context = require('./tests/framework/TestingFramework');
    test.run_test( context );
}

//
// goodbye message
//
if ( welcomeMsgs.run_welcome ) {
    welcomeMsgs.run_goodbye();
}