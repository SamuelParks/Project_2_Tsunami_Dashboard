// Graph the number of tsunamis by year using a line graph
function graphTsunamisByYear(data) {
  
  // Create an array that will hold the number of tsunamis for each year
  var yearTotals = [];

  // counter is used within the for loop to count the number of tsunamis for the current
  // year in question
  var counter = 0;

  // currentYear is used within the for loop to determine if there is a change in years
  // in the data being processed
  var currentYear = 0;

  // Main for loop to count the number of tsunamis by year
  for(i = 0; i < data.length; i++) {
    if (i == 0) {
      // Initialize for first time
      // - set currentYear to the first year found in the data
      // - only count records where the max water height > 0
      currentYear = data[i]["Year"];
      if (data[i]["Maximum Water Height (m)"] > 0) {
        counter += 1;
      }
    } // end if
    else {  
      if (data[i]["Year"] == currentYear) {
        // Current data record is for the current year being processed
        if (data[i]["Maximum Water Height (m)"] > 0) {
          // Only increment counter if the max water height > 0
          counter += 1;
        }
        if (i == (data.length - 1)) {
          // If we're at the last record, then update the yearTotals array
          yearTotals.push(counter);
        }
      }
      else {
        // Different year found
        // - update the yearTotals array
        // - reinitialize counter
        // - update the currentYear 
        yearTotals.push(counter);
        counter = 0;
        currentYear = data[i]["Year"];
      } // end else
    } // end else
  } // end for
  
  // Hardcode in the x axis values to the years in our dataset
  x_axis = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 
            2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  y_axis = yearTotals;

  var trace1 = {
    x: x_axis,
    y: y_axis,
    type: 'line'
  };
  var data = [trace1];
  var layout = {
      title: 'Tsunamis by Year',
      xaxis: {
        title: 'Years'
      },
      yaxis: {
        title: 'Number of Tsunamis'
      }
      };
    
  Plotly.newPlot('graphTsunamisByYear', data, layout);

} // end function graphTsunamisByYear()


function graphTsunamisByMonth(data) {
  var monthArray = [];

  data.forEach(function(d) {
    if(d["Maximum Water Height (m)"] > 0) {
      monthArray.push(d["Mo"]);
    } // end if

  }); // end forEach()


  var trace = {
    x: monthArray,
    type: 'histogram',
  };
  var plotdata = [trace];

  var layout = {
    title: 'Tsunamis by Month',
    xaxis: {title: 'Month',
            tickmode: "linear",
            tick0 : 1,
            dtick: 1
          },
    yaxis: {title: 'Number of Tsunamis'} 
  };

  Plotly.newPlot('graphMonthHistogram', plotdata, layout);

} // end graphTsunamisByMonth()


function graphTsunamisByCountry(data) {
  var countryArray = [];

  data.forEach(function(d) {
    if(d["Maximum Water Height (m)"] > 0) {
      countryArray.push(d["Country"]);
    } // end if

  }) // end forEach()


  var trace = {
    x: countryArray,
    type: 'histogram',
  };
  var data = [trace];

  var layout = {
     autosize: true,
   margin: {
    l: 50,
    r: 50,
    b: 250,
    t: 100,
    p: 1
  },
    title: 'Tsunamis by Country',
    yaxis: {title: 'Number of Tsunamis'} 
  };

  Plotly.newPlot('graphCountryHistogram', data, layout);

} // end function graphTsunamisByCountry()


