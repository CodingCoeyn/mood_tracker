import React, {Fragment, useState, useEffect} from 'react';
import * as d3 from 'd3';

const Record_Graph = () => {
    
    const [chart, set_chart] = useState([]);

    const drawChart = async () =>{
        try {
            
            const response = await fetch(`http://localhost:8000/ratings`);
            const jsonData = await response.json();

            set_chart(jsonData);
            console.log("chart", chart, jsonData);

        } catch (error) {
            console.error(error.message);
        }
        //set dimensions & magins of graph



    }

    useEffect(() =>{
        drawChart();
    }, []);

    return(
        <Fragment>
            <div id="my_datavix"></div>

        </Fragment>
    );
}

// class Record_Graph extends Component {

//     // componentDidMount() {
//     //     this.drawChart();
//     // }
//     // drawChart() {
//     //     const data = [12, 5, 6, 6, 9, 10];

//     //     const svg = d3.select("body")
//     //                 .append("svg")
//     //                 .attr("width", 700)
//     //                 .attr("height", 300);

//     //     svg.selectAll("rect")
//     //         .data(data)
//     //         .enter()
//     //         .append("rect")
//     //         .attr("x", (d, i) => i * 70)
//     //         .attr("y", (d, i) => 300 - 10 * d)
//     //         .attr("width", 65)
//     //         .attr("height", (d, i) => d * 10)
//     //         .attr("fill", "green");
//     // }
//     render() {
//         // return <div id={"#" + this.props.id}></div>
//         return "chicken";
//     }
// }

export default Record_Graph;