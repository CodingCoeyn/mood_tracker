import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';


const Record_Graph = () => {

    const [data] = useState([1,-1,-2,0,3,0,3,2]);

    const [data_date] = useState([
      {date: new Date("2023-02-20"), rating: 0},
      {date: new Date("2023-04-21"), rating: -1},
      {date: new Date("2023-10-03"), rating: 1},
      {date: new Date("2024-01-01"), rating: 3},
      {date: new Date("2024-02-29"), rating: -3}
    ]);
    const svgRef = useRef();
  
    useEffect(() =>{
      //set up svg
      const w = 600, h = 100;
      const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', '#d3d3d3d3')
    //   .style('margin-top', '50')
      .style('margin-bottom', '50')
      .style('overflow', 'visible');
      
      //Set X & Y scales

      const x = d3.scaleTime()
        .range([0, w]);
      const y = d3.scaleLinear()
        .range([h, 0]);
      
      //set axes
      x.domain(d3.extent(data_date, d => d.date));
      y.domain([-3, d3.max(data_date, d => d.rating)]);

      svg.append("g")
      .attr("transform", `translate(0, ${h/2})`)
      .call(d3.axisBottom(x)
      .ticks(d3.timeMonth.every(1))
      .tickFormat(d3.timeFormat("%b %Y")));

      svg.append("g")
      .call(d3.axisLeft(y)
      .ticks(7))

      
      // //set data for svg
      // const generateScaledLine = d3.line()
      // .x((d,i) => xScale(i)) //generates out like
      // .y(yScale)//plotting it using the scale we created
      // .curve(d3.curveCardinal);
      
      // svg.selectAll('.line')
      // .data([data])
      // .join('path')
      // .attr('d', d => generateScaledLine(d)) //d is data
      // .attr('fill', 'none')
      // .attr('stroke', 'black');
  
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