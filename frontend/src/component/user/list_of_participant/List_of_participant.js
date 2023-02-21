import axios from "axios";
import React, { useState } from "react";

// import {Link ,useNavigate} from 'react-router-dom'
// import "../list_of_participant/List_of_participant.css";

function List_of_participant() {

  const [list_of_participant, setList_of_participant] = useState([]);

  axios
    .get("http://localhost:4500/user/viewparticipant")
    .then((res) => {
      setList_of_participant(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">List of Participants</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="row gx-5" style={{ fontWeight: "bold" , textAlign : 'center'}}>
      <div className="col sm-4">
        <p>Name</p>
      </div>
      <div className="col sm-4">
        <p>Class</p>
      </div>
      <div className="col sm-4">
        <p>Roll_no</p>
      </div>
  
      <div className="col sm-4">
        <p>House</p>
      </div>
      <div className="col sm-4">
        <p>Activity_name</p>
      </div>
     
    </div>
  
    {list_of_participant.map((participant_details) => (
      <div className="row gx-5" style={{ textAlign : 'center'}}>
        <div className="col sm-4">
          <p>{participant_details.Name}</p>
        </div>
        <div className="col sm-4">
          <p>{participant_details.Class}</p>
        </div>
        <div className="col sm-4">
          <p>{participant_details.Roll_no}</p>
        </div>
        <div className="col sm-4">
          <p>{participant_details.House}</p>
        </div>
  
        <div className="col sm-4">
          <p>{participant_details.Activity_name}</p>
        </div>
      </div>
    ))}
      </div>
 
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
  </div>
  </div>
   

  );
}

export default List_of_participant;
