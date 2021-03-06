import React, { Component } from "react";
import { Chart } from 'react-google-charts';

class Graph extends Component {
    
    render() {
        return (
        <Chart
            chartType="PieChart"
            data={[['Error Type', 'Percentage'], ['Error a', 40], ['Error b', 10], ['Error c', 20], ['Error d', 8], ['Error e', 12], ['Error f', 10]]}
            options ={{}}
            graph_id="PieChart"
            width="100%"
            height="400px"
            legend_toggle
        />   
        );
        
    }
                      
    
}

export default Graph;