// -
// app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-17       - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22       - update
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const welcomeMsgs = require('./welcomeMessages');
const globals = require('./globals');

//
// welcome messages
//
if ( welcomeMsgs.run_welcome ) {
    welcomeMsgs.run_welcome();
}

//
// define file content path test
const testingFileContentPath = () => { 
 
    // //const fileContentPath = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\app.js';
    // const testFileContentPath = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\test-data-file.txt';

    // const fs = require('fs');
    // try {
    //   fs.readFile('/some/file/that/does-not-exist', (err, data) => {
    //     if (err) {
          
    //     }
    //   });
    // } catch (err) {
    //   // This will not catch the throw!
    //   console.error(err);
    
    
    //     try {
    //         fs.readFile('/some/file/that/does-not-exist', (err, data) => {
    //         // mistaken assumption: throwing here...
    //         if (err) {
    //             throw err;
    //         }
    //     });
    //     }
    //     catch (err) {
    //         // This will not catch the throw!
    //         console.error(err);
    //     }

    //     const fileContent = fs.readFileSync( testFileContentPath, 'UTF8' );
    //     const outputter = require('./output');
    //     outputter.output( 'P L A N S . M D', fileContent );
    // }
};

// 
// define context test
const testingContextTest = () => {
     
    console.log('Aquiring testing context...');
    const testingContext = require('./tests/framework/TestingFramework');

    console.log('Sending message...');
    testingContext.messenger.message(
        'This is a message from the testing context messenger.');

    console.log('Tests complete.');
 
}; 

const runNameGenerators = () => {

    const context   = require('./tests/framework/TestingFramework');
    const generator = require('./_plans/test-data/data_generators/test-data-generator');
    generator
        .namesGenerator()
        // .generate_first_names( context );
        .generate_full_names( context );
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
    testingContextTest();
}
if ( globals.TEST_run_standard_tests ) {
    runTests(); 
}
if ( globals.TEST_run_names_generators ) {
    runNameGenerators();
}

// current test
if ( globals.TEST_run_current_test ) {
    const test      = require('./tests/createDirectoryPathTest');
    const context   = require('./tests/framework/TestingFramework');
    test.run_test( context );
}

//
// goodbye message
//
if ( welcomeMsgs.run_welcome ) {
    welcomeMsgs.run_goodbye();
}

