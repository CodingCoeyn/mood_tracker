
import React, {Fragment, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Record_Modal = ({daily_record}) => {

  // console.log("modal",daily_record);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mood, setMood] = useState(daily_record.mood);
  // const [ratingId, setRating] = useState(daily_record.ratingId);
  
  const updateRecord = async (e) =>{
    e.preventDefault();
    // e.preventDefault();
    try {
      const body = {mood}; /*ratingId */
      const response = await fetch(`localhost:8000/daily_records/${daily_record.id}`,{
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
          <label class=" fw-bold px-2" for="mood">Mood</label>
          <input class="mb-2" type="text" id="mood" name="mood" value={mood} onChange={e => setMood(e.target.value)}></input>
          <br></br>
          <labl class=" fw-bold px-2" for="rating">Rating</labl>
          <select class="mb-2" name="rating" id="rating" value> {/* onChange={/*e => setRating(e.target.value)}*/}
            <option value="3">Great</option>
            <option value="2">Good</option>
            <option value="1">Fine</option>
            <option value="0">Okay</option>
            <option value="-1">Blah</option>
            <option value="-2">Unwell</option>
            <option value="=3">Spiraling</option>
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