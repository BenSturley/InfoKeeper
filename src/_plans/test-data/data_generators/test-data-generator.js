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

//
// fish the first and last names together
// 
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
    const lastNames         = lnGenerator( context ); 

    // little fn to build the full name
    const createFullName = ( firstname, lastname ) => {
        let rv = firstname;
        rv += ' ';
        rv += lastname;
        return rv;
    };


    // bung 'em up togther
    const names = [];
    var currentIndex    = 0
    var maleFlag        = false;
    var lastnameIndex   = 0;
    var counter         = 0;
    lastNames.forEach(
        ln => {
 
            let allGood = true;
            
            // check we have enough first names
            if ( maleFlag ) {
                if ( currentIndex >= maleFirstNames.length ) {
                    // break;
                    allGood = false;
                }
            }
            else {
                if ( currentIndex >= femaleFirstNames.length ) {
                    // break;
                    allGood = false;
                }
            }

            // lets do it!
            if ( allGood && ln !== undefined ) {

                var firstname   = '';
                var lastname    = '';
    
                // do lastname
                lastname = lastNames[ lastnameIndex ].name;
                lastnameIndex++;
    
                // do firstname
                if ( maleFlag ) {
                    firstname = maleFirstNames[ currentIndex ].name;
                    maleFlag = false;
                }
                else {
                    firstname = femaleFirstNames[ currentIndex ].name;
                    maleFlag    = true;
                }
                currentIndex++;
    
                const name = createFullName( firstname, lastname );
                
                if ( OUTPUT_each_name ) {
                    let num = counter +1;
                    let msg = `Extracted (full) name: ${num}: ${name}`;
                    context.messenger.message( msg );
                }
                
                names.push( name );
                counter = counter + 1;
            }
        }
    );
    
    context.test_complete = true;

    return names;
}

//
// who knows? needed, apparently
// 
function generateNames() {

    return {
        generate_first_names:   firstNamesGenerator,
        generate_last_names:    genLastNames,
        generate_full_names:    namesGenerator,
    };
}

// exports, derrrrr................. 
module.exports = {
    nameGenerator:      generateNames,
    test_name:          'Test Data Names Generator',
    enabled:            true
};
    