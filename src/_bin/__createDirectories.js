// createDirectories.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/createDirectories.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-26
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const createDirectories = function( pathToCreate ) {

    // get lib refs
    const fs    = require( 'fs' );
    const path  = require( 'path' );
    const utils = require( '../apputils' );

    const context = require('../tests/framework/TestingFramework');
    const OUTPUT_paths = true;
  
    if ( pathToCreate === undefined ) {
        pathToCreate = 'Public\\InfoKeeper\\DataStores\\Users\\Ben\\datastore\\files\\';
    }

    if ( OUTPUT_paths ) {
        context.messenger.message(`Path to create: ${pathToCreate}`);
    }

    //
    // break up path into directories
    const dirs = splitPathIntoDirs( pathToCreate );
    
    if ( OUTPUT_paths ) {
        const dirsByLine = utils.arrayListByLine( dirs );
        context.messenger.message( `${dirsByLine}` );
    }
    
    //
    // check first node
    let driveNode = dirs[0];
    if ( !isDrive( driveNode ) ) {
        // not a drive. Use current drive.
        driveNode = getCurrentDrive();
        dirs.unshift( driveNode );

        if ( OUTPUT_paths ) {
            context.messenger.message( `Drive not included. Added: "${driveNode}"` );
            context.messenger.message( 'New node list:' );
            const dirsByLine = utils.arrayListByLine( dirs );
            context.messenger.message( `${dirsByLine}` );
        }
    }

    //
    // iterate directory nodes
    let createdPath = driveNode;
    let elementCount = 0;
    dirs.forEach(
        
        d => {
            // check we aren't on first (drive) element
            if ( elementCount > 0 ) {
            
                // add dir to created path tracker
                if ( createdPath.endsWith( path.sep )) {
                    createdPath += d + path.sep;
                }
                else {
                    createdPath += path.sep + d + path.sep;
                }

                // does it exist already? (somehow...?)
                if ( ( !( doesDirectoryExist( createdPath ) ) ) ) {
                    try {
                        if ( OUTPUT_paths ) {
                            context.messenger.message( `Attempting to create: "${createdPath}"` );
                        }
                        context.messenger.info( `Attempting to create directory: ${d}` );
                        
                        fs.mkdirSync( createdPath );
                        
                        if ( OUTPUT_paths ) {
                            context.messenger.message( `Created: "${createdPath}"` );
                        } 
                    }
                    catch (err) {
                        context.messenger.error( err, `Error creating directory: ${d}` );
                    }
                }
            }
            // else {
            //     createdPath += driveNode;
            // }
               elementCount++;
        }
        
    );

    function splitPathIntoDirs( pathToSplit ) {
        const dirs = pathToSplit.split( path.sep );
        return dirs;
    }
    function isDrive( drivePath ) {
        const driveIndicatorIndex = ( drivePath.indexOf( ':' + path.sep ) );
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
    
};

module.exports = createDirectories();
