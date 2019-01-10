// -
// register.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/datastoreTracker/register.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-05 - - - - - - - - - - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
// 
// 
// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
const register = function() {

    //
    // get a context so we can output
    const context = require('../../../appContext');
    const outputToContext = function( msg ) {
        context.messenger.message( msg );
    }

    //
    // check register exists
    const checkExists = require('./checkRegisterExists');
    checkExists.checkRegisterExists();

    // ----------------------------------------------------------- //

    //
    // grab the config
    const config = require('./config');
    const registerFilePath = config.registerFilePath;
    
};

module.exports = {
    dev_register:     register
};