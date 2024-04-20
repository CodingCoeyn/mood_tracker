
import React, {Fragment} from 'react';

const Record_Modal = () => {
    return(
      // modal fade
      <Fragment>

      <div class=" col-6 border border-2 border-black" id="record_modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="my-3 d-flex justify-content-center modal-header">
              <h1 class="modal-title fs-5 px-2" id="record_modal_label">Daily Mood</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-start">
              <form method="put" action="/">
                <label class=" fw-bold px-2" for="mood">Mood</label>
                <input class="mb-2" type="text" id="mood" name="mood"></input>
                <br></br>
                <labl class=" fw-bold px-2" for="rating">Rating</labl>
                <select class="mb-2" name="rating" id="rating">
                  <option value="">Great</option>
                  <option value="">Good</option>
                  <option value="">Fine</option>
                  <option value="">Okay</option>
                  <option value="">Blah</option>
                  <option value="">Unwell</option>
                  <option value="">Spiraling</option>
                </select>
              </form>
            </div>
            <div class="modal-footer m-2">
              <button type="button" class="btn btn-primary m-2">Save</button>
              <button type="button" class="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
  
  //{ <p class="test-color">I'm the Record Modal component</p>}

export default Record_Modal;
