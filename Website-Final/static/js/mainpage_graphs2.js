// ------------------------------------------------------------------
// Graph the number of tsunamis by month, by cause code using 
// a stacked bar graphs
// ------------------------------------------------------------------
function graphTsunamiCauseCodesByMonth(data) {
    // Hardcode our x-axis to be the month numbers of the year
    var x_axis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // Create arrays to hold the number of tsunamis found per each cause code
    var cause_cd_0 = [];
    var cause_cd_1 = [];
    var cause_cd_2 = [];
    var cause_cd_3 = [];
    var cause_cd_4 = [];
    var cause_cd_5 = [];
    var cause_cd_6 = [];
    var cause_cd_7 = [];
    var cause_cd_8 = [];
    var cause_cd_9 = [];
    var cause_cd_10 = [];
    var cause_cd_11 = [];
    
    // ------------------------------------------------------------------------
    // Function countCodesPerMonth() is used by graphTsunamiCauseCodesByMonth()
    // for each month of the year
    // ------------------------------------------------------------------------
    function countCodesPerMonth(month) {
      // Generic counters used as the dataset is processed for the input month.
      // At the end of the dataset for the input month, the values in these counters
      // are added to their respective arrays
      var counterCC0 = 0;
      var counterCC1 = 0;
      var counterCC2 = 0;
      var counterCC3 = 0;
      var counterCC4 = 0;
      var counterCC5 = 0;
      var counterCC6 = 0;
      var counterCC7 = 0;
      var counterCC8 = 0;
      var counterCC9 = 0;
      var counterCC10 = 0;
      var counterCC11 = 0;
  
      // Main processing loop
      // For each record that matches the input month, increment the appropriate counter
      // matching the tsunami cause code
      for(i = 0; i < data.length; i++) {
        if (data[i]["Mo"] == month) {
          switch (data[i]["Tsunami Cause Code"]) {
            case 0:
              counterCC0++;
              break;
            case 1:
              counterCC1++;
              break;
            case 2:
              counterCC2++;
              break;          
            case 3:
              counterCC3++;
              break;          
            case 4:
              counterCC4++;
              break;          
            case 5:
              counterCC5++;
              break;          
            case 6:
              counterCC6++;
              break;          
            case 7:
              counterCC7++;
              break;          
            case 8:
              counterCC8++;
              break;          
            case 9:
              counterCC9++;
              break;          
            case 10:
              counterCC10++;
              break;                        
            case 11:
              counterCC11++;
              break;  
          } // end switch
        } // end if
      } // end for

      // Add values from each counter to their appropriate array
      cause_cd_0.push(counterCC0);
      cause_cd_1.push(counterCC1);
      cause_cd_2.push(counterCC2);
      cause_cd_3.push(counterCC3);
      cause_cd_4.push(counterCC4);
      cause_cd_5.push(counterCC5);
      cause_cd_6.push(counterCC6);
      cause_cd_7.push(counterCC7);
      cause_cd_8.push(counterCC8);
      cause_cd_9.push(counterCC9);
      cause_cd_10.push(counterCC10);
      cause_cd_11.push(counterCC11);  
    } // end function countCodesPerMonth()
  
    // Call the countCodesPerMonth() function for each month of the year
    for(i = 1; i <= 12; i++) {
      countCodesPerMonth(i);
    } // end for
  
    // Define the traces, data, and layout
    var trace1 = {
        x: x_axis,
        y: cause_cd_0,
        name: 'Unknown CC',
        type: 'bar'
      };
      
      var trace2 = {
        x: x_axis,
        y: cause_cd_1,
        name: 'Earthquake',
        type: 'bar'
      };
      
      var trace3 = {
        x: x_axis,
        y: cause_cd_2,
        name: 'Questionable Earthquake',
        type: 'bar'
      };
      
      var trace4 = {
        x: x_axis,
        y: cause_cd_3,
        name: 'Earthquake and Landslide',
        type: 'bar'
      };

      var trace5 = {
        x: x_axis,
        y: cause_cd_4,
        name: 'Volcano and Earthquake',
        type: 'bar'
      };
      
      var trace6 = {
        x: x_axis,
        y: cause_cd_5,
        name: 'Volcano,Earthquake and Landslide',
        type: 'bar'
      };

      var trace7 = {
        x: x_axis,
        y: cause_cd_6,
        name: 'Volcano',
        type: 'bar'
      };
      
      var trace8 = {
        x: x_axis,
        y: cause_cd_7,
        name: 'Volcano and Landslide',
        type: 'bar'
      };

      var trace9 = {
        x: x_axis,
        y: cause_cd_8,
        name: 'Landslide',
        type: 'bar'
      };
      
      var trace10 = {
        x: x_axis,
        y: cause_cd_9,
        name: 'Meteorological',
        type: 'bar'
      };

      var trace11= {
        x: x_axis,
        y: cause_cd_10,
        name: 'Explosion',
        type: 'bar'
      };
      
      var trace12 = {
        x: x_axis,
        y: cause_cd_11,
        name: 'Astronomical Tide',
        type: 'bar'
      };

      var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12];
      
      var layout = {
        xaxis: {title: 'Month',
            tickmode: "linear",
            tick0 : 1,
            dtick: 1
          },
        yaxis: {title: "Tsunami Cause Code"},
        barmode: "relative",
        title: " Tsunami Cause Code vs Month"
        };
      
      // Create the plot
      Plotly.newPlot('graphTsunamiCauseCodesByMonth', data, layout);

} // end graphTsunamiCauseCodesByMonth()