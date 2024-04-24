
import React, {Fragment, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Record_Modal = ({daily_record}) => {

  // console.log("modal",daily_record);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mood, setMood] = useState(daily_record.mood);
  const [ratingId, setRating] = useState(daily_record.ratingId);
  
  const updateRecord = async (e) =>{
    e.preventDefault();
    console.log("updateRecord");
    try {
      const body = {mood, ratingId};
      const response = await fetch(`http://localhost:8000/daily_records/${daily_record.id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

    } catch (error) {
      console.error(error.message);
    }
  };

  return(
    // modal fade
    <Fragment>
      
      <Button data-target={`#record_modal_${daily_record.id}`} variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal id={`record_modal_${daily_record.id}`} show={show} onHide={handleClose}>
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
          <Button variant="primary" onClick={e => updateRecord(e)}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Record_Modal;