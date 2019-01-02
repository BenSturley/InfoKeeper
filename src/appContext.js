// 
// appContext.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/appContext.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-02
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const appContextFrameworkFactory = function() {

    const messenger     = require('./messenger');
    let test_name       = '';
    let test_started    = false;
    let test_completed  = false;
    const test_args     = [];

    return {

        messenger:          messenger,

    };

};

module.exports = appContextFrameworkFactory();