/** A helper class that uses the libraries (Google APIs Node.js client library & the companion auth library). 
 * Given an OAuth2 access token, this class creates the credentials and inits the Sheets API Client.
*/

var {google} = require('googleapis');
var {OAuth2Client} = require('google-auth-library');
var util = require('util');

var SheetsHelper = function(accessToken) {
    var auth = new OAuth2Client();
    auth.credentials = {
        access_token: accessToken
    };
    this.service = google.sheets({version: 'v4', auth: auth});
};
module.exports = SheetsHelper;

/** A method for Creating a spreadsheet.
 * This method defines a simple Spreadsheet Object and 
 * calls the API's spreadsheets.create method to create it on the Server.
 */
SheetsHelper.prototype.createSpreadsheet = function(title, callback) {
    var self = this;
    var request = {
        resource: {
            properties: {
                title: title
            },
            sheets: [
                {
                    properties: {
                        title: 'Data',
                        gridProperties: {
                            columnCount: 6,
                            frozenRowCount: 1
                        }
                    }
                },
                // TODO: Add more sheets into this array
            ]
        }
    };
    self.service.spreadsheets.create(request, function(err, response) {
        if(err) {
            return callback(err);
        }
        var spreadsheet = response.data;
        // TODO: Add header Rows
        return callback(null, spreadsheet);
    });
};