// 
// maleFirstNameGenerators.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/_plans/test-data/data_generators/maleFirstNameGenerators.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-30
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Generates 100 male first names.
*/
/*
Arguments:
    context         -- testing context
*/
/*
Returns: array of objects:
    {
        name:       content, 0
        index:      index, 
        number:     index + 1
    }
*/

/* 
    html contnt - should probably be arg'd, but then can't
    guarantee html will be in correct format (for cheerio)
*/

//
// lib refs
const config                = require('./testConfig');
const fs                    = require('fs');
const getNamesFromHtml      = require('./getNamesFromHtml');
 
//
// flags
const OUTPUT_each_name = config.OUTPUT_everything;

//
// consts for things that should be config'd
const maleNamesHtmlFilePath = config.PATH_html_male_names;
    // = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-first-names-for-males.html';

function genMaleNames( context ) {
        
    if ( context === undefined ) {
        throw new ReferenceError( 'No TestingContext provided.' );
    }
    
    context.test_started = true;

    const html = fs.readFileSync( maleNamesHtmlFilePath );
    const generatedNames = getNamesFromHtml( html, context );

    context.test_complete = true;

    return generatedNames;
}

module.exports = genMaleNames;