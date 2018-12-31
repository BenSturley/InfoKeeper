// 
// lastNamesGenerator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/_plans/test-data/data_generators/lastNamesGenerator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-30
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Pulla names from HTML using Cheerio. 
*/
/*
Arguments:

   context         -- testing context

*/
/*
Returns: array of objects:
    {
        name:       content, 
        index:      index, 
        number:     index + 1
    }
*/

//
// lib refs
const fs                    = require('fs');
const getNamesFromHtml     = require('./getNamesFromHtml');
 
//
// flags
const OUTPUT_each_name = true;

//
// consts for things that should be config'd
const lastNamesHtmlFilePath1
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-last-names-1.html';
const lastNamesHtmlFilePath2
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-last-names-2.html';

// 
function genLastNames( context ) {

    if ( context === undefined ) {
        throw new ReferenceError('No TestingContext provided.');
    }
    
    context.test_started = true;

    const html1  = fs.readFileSync( lastNamesHtmlFilePath1, 'UTF8' );
    const html2  = fs.readFileSync( lastNamesHtmlFilePath2, 'UTF8' );
    
    context.__debug_Is_Lastname             = true;
    context.__debug_Is_Lastname_SecondRun   = true;

    const generatedNames1   = getNamesFromHtml( html1, context );
    const generatedNames2   = getNamesFromHtml( html2, context );

    const generatedNames    = generatedNames1.concat( generatedNames2 );

    context.test_complete = true;

    return generatedNames;

}

module.exports = genLastNames;