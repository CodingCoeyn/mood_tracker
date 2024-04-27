import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';

const Record_Graph = () => {
  
  const [data_date, set_data] = useState([]);
  const svgRef = useRef();
  let temp = [];
  const getRatings = async () =>{
    const response =  await fetch("http://localhost:8000/ratings");
    const jsonData =  await response.json();
    //empty temp[], async will push the data twice
    temp = [];

    jsonData.sort();

    jsonData.forEach(element => {
      temp.push({date: element[0], rating: element[1]});
    });
    set_data(temp);
    console.log("temp", temp);
  };
  console.log("data_date",data_date);

  useEffect(() =>{

    getRatings();
    
    //set up svg
    const w = 475, h = 150;
    const svg = d3.select(svgRef.current)
    .attr('width', w)
    .attr('height', h)
    .style('background', 'linear-gradient(#ACFFE9, #EAFF87, #FF714B)')
    .style('margin-top', '50')
    .style('margin-bottom', '50')
    .style('color', '#540045')
    .style('overflow', 'visible');
    
    //set x & y scales
    const x = d3.scaleTime() 
      .range([0, w]);
    const y = d3.scaleLinear()
      .range([h, 0]);
    
    //set axis
    x.domain(d3.extent(data_date, d => d.date));
    y.domain([-3, 3]);

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
    .curve(d3.curveBasis);
    
    //add line to svg element
    svg.append("path")
    .datum(data_date)
    .attr("fill", "none")
    .attr("stroke", "#540045")
    .attr("stroke-width", 1)
    .attr("d", line);
    

  },[]); //this array will update the dom if the data changes

  return(
    <div>
      <svg ref={svgRef}> </svg>
    </div>

  );
    
}

export default Record_Graph;