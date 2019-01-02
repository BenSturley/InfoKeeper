// 
// errorHandler.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/errorHandler.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const errorHandler = ( err, msg ) => {
    
    if ( msg === undefined ) {
        console.error( `ERROR: ${msg}; ${err}` );
    }
    else {
        console.error( err );
    }

};

module.exports = {
    handleErrror:       errorHandler
};