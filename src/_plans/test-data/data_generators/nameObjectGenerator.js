// 
// nameObjectGenerator.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/_plans/test-data\data_generators/nameObjectGenerator.js
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

    name            -- derrr
    index           -- index, i guess
    number          -- human readable number, for some unknown reason

*/
/*
Returns: object:
    {
        name:       name, 
        index:      index, 
        number:     number
    }
*/ 

const objectCreator = function( name, index, number ) {

    // create data object
    const obj = {
        name:       name, 
        index:      index, 
        number:     number
    };

    return obj;

};

module.exports = {
    create:     objectCreator
}
