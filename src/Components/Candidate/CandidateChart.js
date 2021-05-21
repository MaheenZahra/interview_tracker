import React from 'react';
import ReactFC from "react-fusioncharts"
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionCharts from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function CandidateChart(props) {
  // Preparing the chart data
const chartData = [
  {
    label: "Develpoment Score",
    value: props.devScore
  },
  {
    label: "SoftSkills Score ",
    value:props.softScore
  },
  {
    label: "Style Score",
    value: props.styleScore
  },
  {
    label: "Misc Score",
    value: props.miscScore
  }
    
];
  const chartConfigs = {
    type: "column3D", // The chart type
    width: "100%", // Width of the chart
    height: "600", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        bgColor:"#2a2a2a",
        "baseFontColor":'#ffffff',
        "baseFont": "Verdana",
        "baseFontSize": "11",
        caption:  `${props.name} Over All Score`,
        xaxisname: "Skills",
        yaxisname: "Scores",
        useforwardsteps: "5",
        theme: "fusion"                //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData
    }
  };
  return (
      <div className="widgetWrap">
      
          <ReactFC {...chartConfigs} />
    </div>
  );
}

export default CandidateChart;
