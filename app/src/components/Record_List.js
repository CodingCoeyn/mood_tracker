
import React, {Component} from 'react';
import axios from 'axios';

class Record_List extends Component{
  // state = {
  //   mood: 1
  // };
  state={
    daily_records: ''
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
      console.log(response);
      this.setState({ daily_record: response.data})
    })
    .catch(console.err);
  }

  increaseMood = () => {
    console.log("increaseMood");
    this.setState((prevState, props) =>{
      return{
        mood:prevState.mood+1
      }
    });
  }

  handleSetToTen = () => {
    console.log("handleSetToTen");
    this.setState({
      mood:10
    });
  }

  render() {
    const {joke} = this.state;
    return (
      <div>
        {/* <p>One a scale of 1-10</p> */}
        <p>You are this happy: {joke}</p>
        {/* <button onClick={this.increaseMood}>Cheer up!</button>
        <button onClick={this.handleSetToTen}>Good Mood</button> */}
      </div>
    )
  }
  // render(){
  //   return(
  //     <p class="test-color">I'm the Record List component</p>
  //   );
  // }

}
// function Record_List() {
//   return (
//     <div className="Record_List">

//       <p class="test-color">I'm the Record List component</p>
//     </div>
//   );
// }

export default Record_List;
