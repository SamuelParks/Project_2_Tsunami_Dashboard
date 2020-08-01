# Tsunami Dashboard
**NOTE: A Mapbox API key is required in the config.js file**

## Introduction
We are interested in developing a dashboard to visualize tsunami data for events that occurred during different periods of time. We chose tsunamis because most natural disaster dashboards focus on earthquakes. While tsunamis are usually caused by earthquakes, we thought it would be interesting to look at data that is tsunami-specific. 


## Data Sources
Tsunami data is available on the Na/onal Oceanic and Atmospheric Administra/on (NOAA) website: https://www.ngdc.noaa.gov/hazel/view/hazards/tsunami/runup-search/

We are also web scraping the latest tsunami warning, advisory, watch, or threat headline from https://www.tsunami.gov/


## Technology Stack

* Server-Side
    * Python
    * MongoDB
    * Flask
    

* Client-Side
    * HTML
    * JavaScript
    * Bootstrap CSS
    * Leaflet
    * Plotly
    * DataTables / jQuery

## Architecture Notes
* Data from NOAA.gov is downloaded as a TSV file, then loaded into MongoDB via a Python ETL script
* We created a Flask server with three routes:
    * get_tsunami_status: Retrieves the latest status stored in MongoDB if it exists.  If it does not exist, it will web scrape for a new status message, then return that message
    * update_tsunami_status: Web scrape a new status message from tsunami.gov and return the status message
    * get_tsunami_data: Retrieve the tsunami data from MongoDB
* We used voila to host a Jupyter Notebook file to demonstrate another way of presenting the user with interactive plots

