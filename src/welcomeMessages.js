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

const lineChar = '*';

const welcome = () => {
    console.log( (lineChar.repeat(60)) );
    console.log( '  ** WELCOME TO InfoKeeper!' );
    console.log( (lineChar.repeat(60)) );
};

const goodbye = () => {

    console.log( (lineChar.repeat(60)) );
    console.log( '  ** GOODBYE FROM InfoKeeper!' );
    console.log( (lineChar.repeat(60)) );
};

module.exports = {
    run_welcome:    welcome,
    run_goodbye:    goodbye
};