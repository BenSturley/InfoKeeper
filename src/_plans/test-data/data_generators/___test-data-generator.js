// 
// test-data-generator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/_plans/test-data/test-data-generator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-18
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//
// flags
const OUTPUT_each_name = true;

const fs                = require('fs');
const utils             = require('../../../apputils');
const cheerio           = require( 'cheerio' );
const getNamesFromHtml  = require('./getNamesFromHtml');


//
// html files containing randomnly generated names
//
const femaleNamesHtmlFilePath 
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-first-names-for-females.html';

const maleNamesHtmlFilePath 
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-first-names-for-males.html';

const lastNamesHtmlFilePath1
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-last-names-1.html';
const lastNamesHtmlFilePath2
    = 'C:\\Users\\Pete\\dev\\InfoKeeper\\src\\_plans\\test-data\\html\\100-last-names-2.html';

//
// fn to grab the content from the html
//

// function getNamesFromHtml( html, context ) {

//     if ( context === undefined ) {
//         throw new ReferenceError( 'No TestingContext provided.' );
//     }
    
//     context.test_started = true;

//     const nameObjects = [];

//     const $ = cheerio.load( html );
    
//     $( '.particular_name' ).each(
        
//         function( index, element ) {
                            
//             // get element text
//             let content = element.childNodes[0].nodeValue;

//             // remove ':' at end of content
//             if ( content.endsWith( ':' ) ) {
//                 content = content.substring( 0, content.length - 1 );
//             }

//             // create data object
//             const obj = {
//                 name:       content, 
//                 index:      index, 
//                 number:     index + 1
//             };

//             // add to list
//             nameObjects.push( obj );

//             // output our name
//             if ( OUTPUT_each_name ) {
//                 context.messenger.message( 
//                     `Extracted name: ${obj.number}: ${obj.name}` 
//                     );
//             }
//         }
//     );

//     const names = [];

//     nameObjects.map(
//         fn => {
//             names.push( fn.name );
//         });

//     // convert array of names to lined srting and output it
//     const linedNames = utils.arrayListByLine( names );
    
//     // context.messenger.line();
//     // context.messenger.message( 'Generated names list:' );
//     // context.messenger.line();
//     // context.messenger.message( linedNames );
//     // context.messenger.line();
//     // context.messenger.message( 'Generated names list completed.' );
//     // context.messenger.line();


//     context.test_complete = true;

//     return nameObjects;
// }


function firstNamesGenerator( context ) {

    if ( context === undefined ) {
        throw new ReferenceError( 'No TestingContext provided.' );
    }
    
    context.test_started = true;

    const femaleNameObjects     = [];
    const maleNameObjects       = [];
    const lastNameObjects       = [];
    const nameObjects           = [];
    const femaleNames           = [];
    const maleNames             = [];
    const names                 = [];

    const femaleNameObjects     = genFemaleNames( context );
    const maleNameObjects       = genMaleNames( context );
    const lastNameObjects       = genLastNames( context );

    stop();

    context.test_complete = true;

}


//
// female first names
//
function genFemaleNames( context ) {
        
    if ( context === undefined ) {
        throw new ReferenceError( 'No TestingContext provided.' );
    }
    
    context.test_started = true;

    const geneator = require('./femaleFirstNamesGenerator');
    const generatedNames = genFemaleNames( context );

    // const html = fs.readFileSync( femaleNamesHtmlFilePath, 'UTF8' );   
    // const generatedNames = getNamesFromHtml( html, context );

    context.test_complete = true;

    return generatedNames;
}

//
// male first names
//
function genMaleNames( context ) {
        
    if ( context === undefined ) {
        throw new ReferenceError( 'No TestingContext provided.' );
    }
    
    context.test_started = true;

    const generator = require('./maleFirstNameGenerators');
    const generatedNames = generator.genMaleNames( context );


    context.test_complete = true;

    return generatedNames;
}

// 
// last names generator
//
function genLastNames( context ) {
        
    if ( context === undefined ) {
        throw new ReferenceError( 'No TestingContext provided.' );
    }
    
    context.test_started = true;

    const generator         = require('./lastNamesGenerator');
    const generatedNames    = generator.genLastNames( context );


    context.test_complete = true;

    return generatedNames;
}

// function genLastNames( context ) {

//     if ( context === undefined ) {
//         throw new ReferenceError('No TestingContext provided.');
//     }
    
//     context.test_started = true;

//     const html1             = fs.readFileSync( lastNamesHtmlFilePath1, 'UTF8' );
//     const generatedNames1   = getNamesFromHtml( html1, context );

//     const html2             = fs.readFileSync( lastNamesHtmlFilePath2, 'UTF8' );
//     const generatedNames2   = getNamesFromHtml( html2, context );

//     const generatedNames    = generatedNames1.concat( generatedNames2 );

//     context.test_complete = true;

//     return generatedNames;

// }

function namesGenerator( context ) {

    if ( context === undefined ) {
        throw new ReferenceError('No TestingContext provided.');
    }
    
    context.test_started = true;

    // get femalerfirst names
    const femaleGenerator   = require('./femaleFirstNamesGenerator');
    const femaleFirstNames  = femaleGenerator.genFemaleNames( context );

    // get male first names
    const maleGenerator     = require('./maleFirstNameGenerators');
    const maleFirstNames    = maleGenerator( context );

    // get last names
    const lnGenerator       = require('./lastNamesGenerator');
    const lastNames         = lnGenerator( context ); //genLastNames( context );

    // bung 'em up togther
    const names = [];
    var currentIndex = 0, maleFlag = false;
    var lastnameIndex = 0;
    lastNames.forEach(
        ln => {
            let name = '';
            if ( maleFlag ) {
                name = maleFirstNames[currentIndex];
                maleFlag = false;
            }
            else {
                name = femaleFirstNames[currentIndex];
                maleFlag = true;
                currentIndex++;
            }
            name += ' ' + lastNames[lastnameIndex];
        }
    );

    context.test_complete = true;

}

function generateNames() {

    return {
        generate_first_names:   firstNamesGenerator,
        generate_last_names:    genLastNames,
        generate_full_names:    namesGenerator,
    };
}

module.exports = {
    nameGenerator:      generateNames,
    test_name:          'Test Data Names Generator',
    enabled:            true
};
    