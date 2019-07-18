e strict';
/**
* @file copy-file-to-multiple-paths.js
* @brief Copies a single file to multiple destination paths.
* @author Anadian
* @copyright 	Copyright 2019 Canosw
	Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to the following 
conditions:
	The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//Dependencies
	//Internal
	//Standard
	const FileSystem = require('fs');
	const Path = require('path');
	const Utility = require('util');
	//External

//Constants
const FILENAME = 'copy-file-to-multiple-paths.js';
const MODULE_NAME = 'CopyFileToMultiplePaths';
var PROCESS_NAME = '';
if(require.main === module){
	PROCESS_NAME = 'copy-file-to-multiple-paths';
} else{
	PROCESS_NAME = process.argv0;
}

//Global Variables
var Logger = { 
	log: () => {
		return null;
	}
};
//Functions
function Logger_Set( logger ){
	var _return = [1,null];
	const FUNCTION_NAME = 'Logger_Set';
	//Variables
	var function_return = [1,null];

	//Parametre checks
	if( typeof(logger) === 'object' ){
		if( logger === null ){
			logger = { 
				log: () => {
					return null;
				}
			};
		}
	} else{
		_return = [-2,'Error: param "logger" is not an object.'];
	}

	//Function
	if( _return[0] === 1 ){
		Logger = logger;
		_return = [0,null];
	}

	//Return
	return _return;
}

//Exports and Execution
if(require.main === module){
	var _return = [1,null];
	const FUNCTION_NAME = 'MainExecutionFunction';
	//Dependencies
		//Internal
		//Standard
		//External
		const MakeDir = require('make-dir');
		const ApplicationLogWinstonInterface = require('application-log-winston-interface');
		const EnvPaths = require('env-paths');
	//Constants
	const EnvironmentPaths = EnvPaths( PROCESS_NAME );
	//Variables
	var function_return = [1,null];
	var source_filepath = '';
	var destination_filepaths_array = [];
	//Logger
	try{ 
		MakeDir.sync( EnvironmentPaths.log );
	} catch(error){
		console.error('MakeDir.sync threw: %s', error);
	}
	function_return = ApplicationLogWinstonInterface.InitLogger('debug.log', EnvironmentPaths.log);
	if( function_return[0] === 0 ){
		Logger_Set( function_return[1] );
	}
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: 'Start of execution block.'});
	//Config
	//Main
	if( process.argv.length > 3 ){
		source_filepath = process.argv[2];
		destination_filepath_array = process.argv.slice( 3 );
		for( var i = 0; i < destination_filepath_array.length; i++ ){

	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: 'End of execution block.'});
} else{
	exports.SetLogger = Logger_Set;
}

