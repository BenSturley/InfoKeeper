// 
// TestingFramework.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/framework/TestingFramework.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-19
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const testingFrameworkFactory = function() {

    const messenger     = require('./messenger');
    let test_name       = '';
    let test_started    = false;
    let test_completed  = false;
    const test_args     = [];

    return {

        messenger:          messenger,
        test_name:          test_name,
        test_started:       test_started,
        test_complete:      test_completed,
        test_args:          test_args,

    };

};

module.exports = testingFrameworkFactory();