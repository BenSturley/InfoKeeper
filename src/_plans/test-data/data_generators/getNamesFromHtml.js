// 
// getNamesFromHtml.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/_plans/test-data/data_generators/getNamesFromHtml.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-30
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Pulls names from HTML using Cheerio. 
*/
/*
Arguments:

    html            -- html to process
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
const utils     = require('../../../apputils');
const cheerio   = require( 'cheerio' );

//
// flags
const OUTPUT_each_name = true;

//
function getNamesFromHtml( html, context ) {

    if ( context === undefined ) {
        throw new ReferenceError( 'No TestingContext provided.' );
    }    
    
    context.test_started = true;

    const nameObjects = [];

    const $ = cheerio.load( html );
    
    $( '.particular_name' ).each(
        
        function( index, element ) {
                            
            // get element text
            let content = element.childNodes[0].nodeValue;

            // remove ':' at end of content
            if ( content.endsWith( ':' ) ) {
                content = content.substring( 0, content.length - 1 );
            }

            // // create data object
            // const obj = {
            //     name:       content, 
            //     index:      index, 
            //     number:     index + 1
            // };

            // get objct creator
            const objectCreator = require( './nameObjectGenerator' );        
            const obj = objectCreator.create( content, index, index + 1 );

            if ( context.__debug_Is_Lastname_SecondRun ) {
                obj.number = obj.number + 100;
            }

            // add to list
            nameObjects.push( obj );

            // output our name
            if ( OUTPUT_each_name ) {
                let lns = '';
                if ( context.__debug_Is_Lastname ) {
                    lns = '(last) ';
                }
                else {
                    lns = '(first) ';
                }
                let output_msg = `Extracted ${lns}name: ${obj.number}: ${obj.name}`;
                context.messenger.message( output_msg );
            }
        }
    );

    const names = [];

    nameObjects.map(
        fn => {
            names.push( fn.name );
        });

    // convert array of names to lined srting and output it
    const linedNames = utils.arrayListByLine( names );
    
    // context.messenger.line();
    // context.messenger.message( 'Generated names list:' );
    // context.messenger.line();
    // context.messenger.message( linedNames );
    // context.messenger.line();
    // context.messenger.message( 'Generated names list completed.' );
    // context.messenger.line();


    context.test_complete = true;

    return nameObjects;
}

module.exports = getNamesFromHtml;