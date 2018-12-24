// 
// test-data-generator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/_plans/test-data/test-data-generator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-18
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const femaleNamesHtmlFilePath 
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-first-names-for-females.html';

const maleNamesHtmlFilePath 
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-first-names-for-males.html';

const lastNamesHtmlFilePath 
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\200-last-names.html';

const cheerio = require('cheerio');

const firstNamesGenerator = ( context ) => {

    const femaleNames   = [];
    const maleNames     = [];
    const names         = [];

    const fs = require('fs');
    fs.readFileSync( femaleNamesHtmlFilePath, 'UTF8' );

    
};

const lastNamesGenerator = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('No TestingContext provided.');
    }
    
    context.test_started =true;


    context.test_complete =false;

};

const namesGenerator = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('No TestingContext provided.');
    }
    
    context.test_started =true;


    context.test_complete =true;

}; 

const generateNames = () => {
    return {
        generate_first_names:   firstNamesGenerator,
        generate_last_names:    lastNamesGenerator,
        generate_full_names:    namesGenerator,
    };
};

module.exports = {
    nameGenerator:      generateNames,
    test_name:          'Test Data Names Generator',
    enabled:            true
};