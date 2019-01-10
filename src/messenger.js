// 
// messenger.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/messenger.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-02
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const messenger = () => {

    const events = require('events');
    const emitter = new events.EventEmitter();

    const setEvents = function() {

        emitter.on( 'clear' , () => {
            console.clear();
        });
        emitter.on( 'message', ( msg ) => {
            console.log(msg);
        });
        emitter.on( 'msg', ( msg ) => {
            console.log(msg);
        });
    
        emitter.on( 'info', ( msg ) => {
            console.info(msg);
        });
    
        emitter.on( 'error', ( err, msg ) => {
            if ( msg === undefined ) {
                console.error( err );
            }
            else {
                console.error( `${msg}: ${err}` );
            }
        });
        emitter.on( 'err', ( err, msg ) => {
            if ( msg === undefined ) {
                console.error( err );
            }
            else {
                console.error( `${msg}: ${err}` );
            }
        });
    
        emitter.on( 'line', ( char, count ) => {
            if ( char === undefined ) {
                char = '~';
            }
            if ( count === undefined ) {
                count = 80;
            }
            console.log( char.repeat( count ) );
        });
    
    };
    setEvents();

    return {

        clear:
            () => {
                emitter.emit( 'clear' )
            },

        message:    
            ( msg ) => {
                emitter.emit( 'message', msg );
            },
        msg:
            ( msg ) => {
                emitter.emit( 'msg', msg );
            },

        info:
            ( msg ) => {
                emitter.emit( 'info', msg );
            },

        error: 
            ( err, msg ) => {
                emitter.emit( 'error', err, msg );
            },
        err: 
            ( err, msg ) => {
                emitter.emit( 'error', err, msg );
            },
        
        line:
            ( char, count ) => {
                emitter.emit( 'line', char, count );
            }
    };
};

module.exports = messenger();
