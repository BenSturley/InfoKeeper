// 
// output.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/output.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-17
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

const outputter = function( contentTitle, content ) {

    console.log('****** CONTENT BEGINGS ******');
    console.log();
    console.info( contentTitle );
    console.log( ('~').repeat( contentTitle.length ) );
    console.log();
    console.log( content );
    console.log();
    console.log('****** CONTENT ENDS ******');
};

module.exports = {
    output:     outputter
};
