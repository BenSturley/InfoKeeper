// -
// createDatastoreTest.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/createDatastoreTest.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-11 - - - - - - - - - - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
const tester = ( context ) => {

    const config = require('../datastores/engine/datastoreRegister/config');
    const creator = require('../datastores/engine/datastores/createDatastore');
    creator.createDatastore();
    // datastores\engine\datastoreRegister\config.js

};

module.exports = {
    run_test:       tester,
    test_name:      'Create Datastore Test',
    enabled:        true
};








