import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';


const Record_Graph = () => {

    const [data] = useState([1,-1,-2,0,3,0,3,2]);
    const svgRef = useRef();
  
    useEffect(() =>{
      //set up svg
      const w = 400, h = 100;
      const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', '#d3d3d3d3')
    //   .style('margin-top', '50')
      .style('margin-bottom', '50')
      .style('overflow', 'visible');
      
      //setting scaling
      const xScale = d3.scaleLinear()//scale to plot our points
      .domain([0,data.length-1])
      .range([0, w]);

      const yScale = d3.scaleLinear()
      .domain([-3,h-97]) //the numbers on the axes
      .range([h+97,0]); //the shape of the line
     
      const generateScaledLine = d3.line()
      .x((d,i) => xScale(i)) //generates out like
      .y(yScale)//plotting it using the scale we created
      .curve(d3.curveCardinal);
     
      //set axies
        const xAxis = d3.axisBottom(xScale)
        .ticks(data.length)
        .tickFormat(i => i+1);
        const yAxis = d3.axisLeft(yScale)
        .ticks(5) //# of ticks on graph

        svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${h+97})`);// for putting the xaxis on the bottom

        svg.append('g')
        .call(yAxis);

      //set data for svg
      svg.selectAll('.line')
      .data([data])
      .join('path')
      .attr('d', d => generateScaledLine(d)) //d is data
      .attr('fill', 'none')
      .attr('stroke', 'black');
  
    }, [data]); //this array will update the dom if the data changes

    return(
        <div>

            <svg ref={svgRef}> </svg>
        </div>

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