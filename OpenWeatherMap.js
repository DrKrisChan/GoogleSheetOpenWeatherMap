// Code available at github.com/DrKrisChan/GoogleSheetOpenWeatherMap
// Original Code written by Amit Agarwal www.ctrlq.org
// Amended by Dr Kristofer Chan (kristofer.chan@kcl.ac.uk) to acquire weather data from OpenWeatherMap

// Step 1: Setup an OpenWeatherMap account and find the API key

// Step 2: EDIT THE LATITUDE (lat=), LONGITUDE (lon=) AND API KEY (APPID) BELOW. Note that it can take a bit of time for your API key to become active (normally less than an hour).

var response = UrlFetchApp.fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.4816&lon=-3.1791&appid=b6907d289e10d714a6e88b30761fae22"); 
Logger.log(response)

function writeJSONtoSheet(json) {

  var sheet = SpreadsheetApp.getActiveSheet();


  var row = [];
  row.push(response);
 

  sheet.appendRow(row);

}

// Step 3: After the above has been edited:
// a) We recommend renaming 1) the function (change writeJSONtoSheet to your location, e.g. writeJSONtoSheetBordeaux), 2) "code.gs" (left toolbar), and 3) your project title (top toolbar)
// b) SAVE (CTRL+S)

// Step 4: Under "Publish" on the top bar, click "Deploy as web app". Click Update and allow permissions via Google

// Step 5: navigate to script.google.com. For the specific web app, click ... then Triggers. Click "create a new trigger", "Event source" -> "Time Driven" and set an appropriate interval (10-15 minutes is generally good).
