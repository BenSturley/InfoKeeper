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

    console.log('**** TESTS PROCEDURE STARTED ****');

    const getList = require('./framework/createTestsList');
    const testsList = getList.create_list();

    // create testing context
    const context = require('./framework/TestingFramework');

    testsList.forEach(
        t => {
            
            // get test ref path
            const refPath = t.refPath;

            // get test ref
            const test = require(refPath);
            const test_name = test.test_name;
            const enabled = test.enabled;
            context.messenger.info(`TEST: ${test_name}`);
            context.messenger.info(`Test enabled: ${enabled}`);
            if ( !enabled ) {
                context.messenger.error('Test not enabled!');
            }
            else {
                test.run_test( context );
            }

        }
    );

    console.log('**** TESTS: TESTS PROCEDURE COMPLETED ****');
    
};

module.exports = {
    run:    test_runner
};
