# SheetOpenWeatherMap
**Automatically download weather data to a Google Sheet from OpenWeatherMap**

Method:
- Create a new Google Sheet
- Copy the entire code from the OpenWeatherMap.js file in this repository (https://github.com/DrKrisChan/SheetOpenWeatherMap/blob/master/OpenWeatherMap.js)
- On the top toolbar, under Tools, click Script editor
- Replace the entire script with the copied script
- Edit as instructed in the script (copied below):

  1) Setup an OpenWeatherMap account and find the API key
  2) EDIT THE LATITUDE (lat=), LONGITUDE (lon=) AND API KEY (APPID)
  3) We recommend renaming 1) the function (change Tawarano to your location), 2) "code.gs" (left toolbar), and 3) your project title (top toolbar). Save the Google script file.
  4) Under "Publish" on the top bar, click "Deploy as web app". Click Update and allow permissions via Google
  5) navigate to script.google.com. For the specific web app, click ... then Triggers. Click "create a new trigger", "Event source" -> "Time Driven" and set an appropriate interval (10-15 minutes is generally good).


Created by Dr Kristofer Chan, Geography Department, King's College London
