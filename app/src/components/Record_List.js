import React, {Fragment, useEffect, useState} from "react";

const Record_List = () => {

  const [daily_records, set_records] = useState([]);

  const getAllRecords = async () =>{
    try {
      const response = await fetch("http://localhost:8000/daily_records");
      const jsonData = await response.json();

      console.log(jsonData);

      set_records(jsonData);
      
    } catch (error) {
      console.error(error.message);
    }

  }

  useEffect(() =>{
    getAllRecords();
  }, []);
  return(
    // console.log("return",daily_records)
    <Fragment>
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
          {
            daily_records.map(daily_record => (
              <tr key={daily_record.id}>
                <td>{daily_record.createdAt}</td>
                <td>{daily_record.mood}</td>
                <td>{daily_record.ratingId}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
       
    </Fragment>
  );

}

export default Record_List;