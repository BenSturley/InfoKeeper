// 
// welcomeMessages.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/welcomeMessages.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-17       - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22       - update
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

const lineChar  = '=';
const lineLen   = 60;

const welcome = () => {
    console.log( (lineChar.repeat( lineLen )) );
    console.log( '  ** WELCOME TO InfoKeeper!' );
    console.log( (lineChar.repeat( lineLen )) );
};

const goodbye = () => {

    console.log( (lineChar.repeat( lineLen )) );
    console.log( '  ** GOODBYE FROM InfoKeeper!' );
    console.log( (lineChar.repeat( lineLen )) );
};

module.exports = {
    run_welcome:    welcome,
    run_goodbye:    goodbye
};