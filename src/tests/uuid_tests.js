// uuid_tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/uuid_tests.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-02
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const uuidv4 = require('uuid/v4');

var testFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError( 'No TestingContext provided.' );
    }
    
    context.test_started = true;

    const id1 = uuidv4();
    const id2 = uuidv4();
    const id3 = uuidv4();
    const id4 = uuidv4();

    const output = '\n\n'
                 + `id 1: ${id1}\n`
                 + `id 2: ${id2}\n`
                 + `id 3: ${id3}\n`
                 + `id 4: ${id4}\n`;

    // const output = uuidv4()
    //                 + ', '
    //                 + uuidv4();

    context.messenger.message( `OUTPUT: ${output}` );

    context.test_complete = true;

    return output;
};

module.exports = {
    test_name:      'Test UUIDs',
    run_test:       testFn,
    enabled:        true
};