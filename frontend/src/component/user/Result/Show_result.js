import React, { useState } from "react";
import axios from "axios";

function Show_result() {
  const [show_result, setShow_result] = useState([]);

  axios
    .get("http://localhost:4500/user/showresult")
    .then((res) => {
      setShow_result(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Result on the basis of performance 
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row g-2" style={{ fontWeight: "bold" , textAlign : 'center'}}>
                <div className="col sm-4">
                  <p>Event_name</p>
                </div>
                <div className="col sm-4">
                  <p>Activity_name</p>
                </div>
                <div className="col sm-4">
                  <p>Participant_name</p>
                </div>

                <div className="col sm-4">
                  <p>Performance</p>
                </div>
              </div>

              {show_result.map((show_result_details) => (
                <div className="row g-2" style={{ textAlign : 'center'}}>
                  <div className="col sm-4">
                    <p>{show_result_details.Event_name}</p>
                  </div>
                  <div className="col sm-4">
                    <p>{show_result_details.Activity_name}</p>
                  </div>
                  <div className="col sm-4">
                    <p>{show_result_details.Participant_name}</p>
                  </div>
                  <div className="col sm-4">
                    <p>{show_result_details.Performance}</p>
                  </div>

                  
                </div>
              ))}
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show_result;
