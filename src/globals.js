// 
// globals.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/globals.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-21   created
// 2019-01-02   update: run_current_dev flag
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const globals = () => {

    const errorHandler  = require('./errorHandler');
    const welcomeMsgs   = require('./welcomeMessages');

    return {
    
    // ---------------------------------------------------------------------------- //

        DEV_run_current_dev:                    true,
        
        TEST_run_test_file_content_path:        false,
        TEST_run_test_file_tesing_context:      false,
        TEST_run_standard_tests:                false,
        TEST_run_names_generators:              false,
        TEST_run_current_test:                  false,
        
    // ---------------------------------------------------------------------------- //

        APP_NAME:                               'InfoKeeper',

        error_handler:                          errorHandler,

        MSGS_show_welcome:                      welcomeMsgs.run_welcome,
        MSGS_show_goodbye:                      welcomeMsgs.run_goodbye,

        
    };
};

module.exports = globals();
