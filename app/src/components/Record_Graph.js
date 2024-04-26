import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';


const Record_Graph = () => {


    const [data_date, set_data] = useState([
      {date: new Date("2023-02-20"), rating: 0},
      {date: new Date("2023-04-21"), rating: -1},
      {date: new Date("2023-10-03"), rating: 1},
      {date: new Date("2024-01-01"), rating: 3},
      {date: new Date("2024-02-29"), rating: -3}
    ]);
    const svgRef = useRef();

    const getRatings = async () =>{
      const response = await fetch("http://localhost:8000/ratings");
      const json     = await response.json();

      set_data(json);
      console.log(json, "data_date", JSON.stringify(data_date));
    };
  
    useEffect(() =>{
      // getRatings();
      //set up svg
      const w = 400, h = 100;
      const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', 'none')
      .style('margin-top', '50')
      .style('margin-bottom', '50')
      .style('overflow', 'visible');
      
      //set x & y scales
      const x = d3.scaleTime()
        .range([0, w]);
      const y = d3.scaleLinear()
        .range([h, 0]);
      
      //set axis
      x.domain(d3.extent(data_date, d => d.date));
      y.domain([-3, d3.max(data_date, d => d.rating)]);

      //create svg element
      svg.append("g")
      .attr("transform", `translate(0, ${h})`)
      .call(d3.axisBottom(x)
      .ticks(6)
      .tickFormat(d3.timeFormat("%b %Y")));

      svg.append("g")
      .call(d3.axisLeft(y)
      .ticks(7));

      // create line
      const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.rating))
      .curve(d3.curveCardinal);
      
      //add line to svg element
      svg.append("path")
      .datum(data_date)
      .attr("fill", "none")
      .attr("stroke", "orangered")
      .attr("stroke-width", 1)
      .attr("d", line);
      
  
    }, []); //this array will update the dom if the data changes

    return(
      <div >
        <svg ref={svgRef}> </svg>
      </div>

    );
    
}

export default Record_Graph;