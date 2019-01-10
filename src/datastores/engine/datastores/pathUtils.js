// pathUtils.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/engine/datastores/pathUtils.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2019-01-06               created
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

// 
// lib refs
const path  = require('path');
const fs    = require('fs');

//
// path extension utils
//
function splitPathIntoDirs( pathToSplit ) {
    const dirs = pathToSplit.split( path.sep );
    return dirs;
}

function isDrive( drivePath ) {
    // const driveIndicatorIndex = ( drivePath.indexOf( ':' + path.sep ) );
    const driveIndicatorIndex = ( drivePath.indexOf( ':' ) );
    const rv = driveIndicatorIndex != -1;
    return rv;
}

function doesDirectoryExist( dirPath ) {
    return fs.existsSync ( dirPath );
}

function getCurrentDrive() { 
    const currentDir = __dirname;
    const colonIndex = currentDir.indexOf( ':' );
    let drive = currentDir.substring( 0, colonIndex + 1);
    if ( !drive.endsWith( path.sep )) {
        drive += path.sep;
    }
    return drive;
}

module.exports.isDrive              = isDrive;
module.exports.doesDirectoryExist   = doesDirectoryExist;
module.exports.getCurrentDrive      = getCurrentDrive;
module.exports.splitPathIntoDirs    = splitPathIntoDirs
