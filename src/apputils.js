// apputils.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/apputils.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-19
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const arrayListByLine = function( arr ) {
   
    // if ( !( !!arr ) && ( array.constructor === Array ) )
    // if ( !( typeof arr === Array ) {
    //     throw new TypeError( 'Must be of type Array.' );
    // }

    let rv = '';
    const newline = '\n';
    
    for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      if ( rv.length > 0 ) {
          rv += newline;
      }
      rv += e;
    }

    return rv;
};

module.exports = {
    arrayListByLine:    arrayListByLine
};      