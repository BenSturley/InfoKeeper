// 
// globals.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/src/globals.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-21
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const globals = function() {

    const errorHandler = require('./errorHandler');

    return {
        TEST_run_test_file_content_path:        false,
        TEST_run_test_file_tesing_context:      false,
        TEST_run_standard_tests:                true,
        error_handler:                          errorHandler,
        
    };
};

module.exports = globals();
