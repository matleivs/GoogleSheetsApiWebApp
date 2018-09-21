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