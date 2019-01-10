// createDirectories.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/datastores/createDirectories.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2018-12-22
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// get lib refs
const fs            = require( 'fs' );
const path          = require( 'path' );
const utils         = require( '../../../apputils' );
const errorHandler  = require( '../../../errorHandler' );
const path_utils    = require( './pathUtils' );

const createDirectories = ( pathToCreate ) => {

    // create a context
    const context = require( '../../../appContext' );
    const OUTPUT_paths = true;

    if ( pathToCreate === undefined ) {
        // errorHandler.handleErrror(
        //     new TypeError( 'No directory path to create provided.' )
        // );
        throw new Error( `pathToCreate is bad (${pathToCreate})` )
    }

    if ( OUTPUT_paths ) {
        context.messenger.message( `Path to create: ${pathToCreate}` );
    }

    //
    // break up path into directories
    const dirs = path_utils.splitPathIntoDirs( pathToCreate );
    
    if ( OUTPUT_paths ) {
        const dirsByLine = utils.arrayListByLine( dirs );
        context.messenger.message( `${dirsByLine}` );
    }
    
    //
    // check first node
    let driveNode = dirs[0];
    if ( !path_utils.isDrive( driveNode ) ) {
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
                if ( ( !( path_utils.doesDirectoryExist( createdPath ) ) ) ) {
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

    // all done!
    return true;
};


module.exports = {
    createDirectories:  createDirectories
};
