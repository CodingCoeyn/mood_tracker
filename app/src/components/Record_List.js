
import React, {Component} from 'react';
import axios from 'axios';

class Record_List extends Component{
  // state = {
  //   mood: 1
  // };
  state={
    daily_records: []
  }
  componentDidMount(){
    const url = "http://localhost:8000/daily_records";
    // const url = "https://icanhazdadjoke.com";
    const options = {
      headers: {
        Accept: "application/json"
      }
    }

    axios.get(url,options)
    .then(response => {
      console.log("response",response);
      this.setState({ daily_records: response.data})
      console.log("this.state",this.state.daily_records);
    })
    .catch(console.err);
  }

  // render() {
  //   const daily_records = this.state.daily_record;
  //   console.log("render state",this.state.daily_record,"render records", daily_records);
  //   console.log(typeof daily_records);
  //   // this.test();

  //   return (
  //    <p></p>
  //     // <div>
  //     //   {/* <p>One a scale of 1-10</p> */}
  //     //   <p>You are this happy: {daily_records}</p>
  //     //   {/* <button onClick={this.increaseMood}>Cheer up!</button>
  //     //   <button onClick={this.handleSetToTen}>Good Mood</button> */}
  //     // </div>
  //   )
  // }
  render(){
    const daily_records = this.state.daily_records;
    // console.log(daily_records[0]);
    
    return(
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Mood</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

        <tr id="daily_record[id]">
          <td>daily_record[createdAt]</td>
          <td>daily_record[mood]</td>
          <td>daily_record[rating]</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
        </tr>
        </tbody>
        
      </table>
      // <p class="test-color"> I'm the Record List component</p>
    );
  }

}


export default Record_List;
