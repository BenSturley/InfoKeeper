// -
// config.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/engine/datastoreRegister/config.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-02 - - - - - - - - - - started
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
// 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
const registerConfig = function() {

    const path = require('path');

    const thisDir   = __dirname;
    // const regDir    = thisDir;
    const regDir    = 'c:\\public\\ik_dbg\\infokeeper\\datastores\\register';
    const filename  = 'datastore_register.dat';
    const fullpath  = path.join(regDir, filename);

    const createdBy = 'BS';

    return {

        registerFilename:           filename,
        registerDirectoryPath:      regDir,
        registerFilePath:           fullpath,
        registerFileCreatedBy:      createdBy,
    };
};

module.exports = registerConfig();
