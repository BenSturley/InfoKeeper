// -
// app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-17       - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22       - update
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
        //.generate_last_names( context );
        .generate_full_names( context );
};
 
// define standard tests
const runTests = () => {
 
    const run_tests = require('./tests/run_tests');
    run_tests.run();
    
};

// rxun tests if flags in globals module tell us to
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
    // const test      = require('./tests/createDirectoryPathTest');
    // const context   = require('./tests/framework/TestingFramework');
    // test.run_test( context );

    const filePath = 'C:\\Users\\Pete\\Infokeeper\\datastores\\myFirstDatastore\\myFirstDatastore.env';

    const datastoreCreator = require('./datastores/createDatastore');
    datastoreCreator.createDatastore( filePath );
}

//
// goodbye message
//
if ( welcomeMsgs.run_welcome ) {
    welcomeMsgs.run_goodbye();
}

