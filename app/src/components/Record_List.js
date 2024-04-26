import React, {Fragment, useEffect, useState} from "react";
import Record_Modal from './Record_Modal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const Record_List = () => {

  //Listing all records
  const [daily_records, set_records] = useState([]);

  const getAllRecords = async () =>{
    try {
      const response = await fetch("http://localhost:8000/daily_records");
      const jsonData = await response.json();

      // console.log(jsonData);

      set_records(jsonData);
      
    } catch (error) {
      console.error(error.message);
    }

  };
  
  useEffect(() =>{
    getAllRecords();
  }, []);

  //Delete a record
  const deleteRecord = async id =>{
    try {
        const response = await fetch(`http://localhost:8000/daily_records/${id}`, {
          method: "DELETE"
        });
        // console.log("deleteRecord");
        set_records(daily_records.filter(daily_record => daily_record.id !== id));

    } catch (error) {
      console.error(error.message);
    }
  };

  //Add a record
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [mood, setMood] = useState();
  const [ratingId, setRating] = useState();

  const addRecord = async (e) =>{
    e.preventDefault();

    try {
      const body = {mood, ratingId};
      const response = await fetch(`http://localhost:8000/daily_records`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      
    } catch (error) {
      console.error(error.message);
    }
  }
  
  return(
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
      
      {/* <!-- Add Modal --> */}
      <div>
        <Button data-target="#record_modal_new" variant="primary" onClick={handleShow}>
         Add
        </Button>

        <Modal id="record_modal_new" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="justify-content-center">Daily Mood</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label className=" fw-bold px-2" htmlFor="mood">Mood</label>
            <input className="mb-2" type="text" id="mood" name="mood" value={mood} onChange={e => setMood(e.target.value)}></input>
            <br></br>
            <label className=" fw-bold px-2" htmlFor="rating">Rating</label>
            <select className="mb-2" name="rating" id="rating" value={ratingId}  onChange={e => setRating(e.target.value)}> 
              <option value="1">Great</option>
              <option value="2">Good</option>
              <option value="3">Fine</option>
              <option value="4">Okay</option>
              <option value="5">Blah</option>
              <option value="6">Unwell</option>
              <option value="=7">Spiraling</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={e => { addRecord(e); handleClose(); }}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
    </Fragment>
  );

}

export default Record_List;