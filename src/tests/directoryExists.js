// directoryExists.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/directoryExists.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-19
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const runner = function( context ) {
    
    if ( context === undefined ) {
        throw new ReferenceError('No TestingContext provided.');
    }

    context.test_started = true;

    const testDirPath = 'C:\\Users\\Pete\\Documents\\_all_testing\\infokeeper+datastore';

    const fs = require('fs');
    const exists = fs.existsSync( testDirPath );

    context.test_complete = true;

    return exists;

};

module.exports = {
    run_test:       runner,
    test_name:      'Directory Exists Test',
    enabled:        true,
};