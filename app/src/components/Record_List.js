import React, {Fragment, useEffect, useState} from "react";
import Record_Modal from './Record_Modal';


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

  };
  const deleteRecord = async id =>{
    try {
        const response = await fetch(`http://localhost:8000/daily_records/${id}`, {
          method: "DELETE"
        });
        console.log("deleteRecord");
        set_records(daily_records.filter(daily_record => daily_record.id !== id));

    } catch (error) {
      console.error(error.message);
    }
  };

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
              <tr id={daily_record.id} key={daily_record.id}>
                <td id={"createdAt_"+daily_record.id} >{daily_record.createdAt}</td>
                <td id={"mood_"+daily_record.id}>{daily_record.mood}</td>
                <td id={"ratingId_"+daily_record.id}>{daily_record.ratingId}</td>
                <td id={"edit_"+daily_record.id}><Record_Modal daily_record={daily_record} /></td>
                <td id={"delete_"+daily_record.id}><button type="button" onClick ={ () => deleteRecord(daily_record.id) }>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
       
    </Fragment>
  );

}

export default Record_List;