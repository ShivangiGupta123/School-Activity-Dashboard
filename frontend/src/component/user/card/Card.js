import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../user/card/Card.css";
import { Link } from "react-router-dom";
import GeneratePdf from "../../pdf/GeneratePdf";
function Card() {
  const [event_activity_name, setEventActivity_name] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://localhost:4500/admin/view_added_admin_event")
      .then((res) => {
        console.log("res.data", res.data[0]);
        console.log("data", res);
        // console.log("res.data.data.End_date" , res.data.data.End_date)
        // console.log("res.data.End_date" , res.data[0].End_date)
        setEventActivity_name(res.data[0]);
        // setActivity_name(res.data)

        //   if(res.data.End_date > Current_date)
        //   {

        //   setEvent_name(res.data)
        //   setActivity_name(res.data)

        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
    <div style = {{marginTop:30 , marginLeft:30}}>
      <GeneratePdf />
      
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card" style={{ backgroundColor: "palevioletred" }}>
            <div class="card-body">
              {event_activity_name.map((event_activity_Name) => {
                
                  return (
                    <div>
                      <h4 class="card-title" >
                        {event_activity_Name.Event_name}(
                        {event_activity_Name.Activity_name})
                      </h4>
                    </div>
                  );
               
              })}

              <Link to="/eventform">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Participation Form
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style={{ backgroundColor: "gray" }}>
            <div class="card-body">
              <h5 class="card-title">List of Participants</h5>
              <p class="card-text">Number of Participants</p>

              <Link to="/listofparticipant">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  List of Participants
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style={{ backgroundColor: "bisque" }}>
            <div class="card-body">
              <h5 class="card-title">Result</h5>
              <p class="card-text">Result on the basis of performance</p>

              <Link to="/showresult">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  View Result
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
}

export default Card;
