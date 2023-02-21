import React, { useEffect, useState } from "react";
// import {toast} from 'react-toastify'
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import "../event_form/Event_form.css";
function Event_form() {
  const [activity_name, setActivity_name] = useState([]);
  // const [selected_activity, setActivity] = useState("");

  // Using this function to update the state of fruit
  // whenever a new option is selected from the dropdown
  useEffect(() => {
    axios
      .get("http://localhost:4500/admin/view_added_admin_event")
      .then((res) => {
        setActivity_name(res.data);
        console.log("activity names >> ##", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const selectActivity = (e) => {
  //   console.log("event of selelll >> ", e);
  //   setActivity(e.target.value);
  //   console.log("selected_activity >> ", selected_activity);
  // };

  const formik = useFormik({
    initialValues: {
      Name: "",
      Class: "",
      Roll_no: "",
      House: "",
      Activity_name: "",
    },

    validationSchema: Yup.object({
      Name: Yup.string().required("Required"),
      Class: Yup.string().required("Required"),
      Roll_no: Yup.number().required("Required"),
      House: Yup.string().required("Required"),
      Activity_name: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      axios
        .post("http://localhost:4500/user/userevent", values)
        .then((res) => {
          console.log(res.data);
          // toast("hello sakshi")
      // alert(JSON.stringify(values, null, 2));

          toast.success('Login successfully', {autoClose:3000})
        })
        .catch((error) => {
          console.log(error);
          // const result = JSON.stringify(values, null, 2)

          toast.error('error',{autoClose:1000})
        });
        // toast.success(JSON.stringify(values, null, 2))
        
      // alert(JSON.stringify(values, null, 2));
    },
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
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Participation Form
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label">
                    Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Name}
                  />
                  {formik.touched.Name && formik.errors.Name ? (
                    <div style={{ color: "red" }}>{formik.errors.Name}</div>
                  ) : null}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">
                    Class<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Class"
                    placeholder="Class"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Class}
                  />

                  {formik.touched.Class && formik.errors.Class ? (
                    <div style={{ color: "red" }}>{formik.errors.Class}</div>
                  ) : null}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">
                    Roll_no<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="Roll_no"
                    placeholder="Roll_no"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Roll_no}
                  />
                  {formik.touched.Roll_no && formik.errors.Roll_no ? (
                    <div style={{ color: "red" }}>{formik.errors.Roll_no}</div>
                  ) : null}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">
                    House<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="House"
                    placeholder="House"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.House}
                  />
                  {formik.touched.House && formik.errors.House ? (
                    <div style={{ color: "red" }}>{formik.errors.House}</div>
                  ) : null}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">
                    Activity_name<span style={{ color: "red" }}>*</span>
                  </label>

                  <select
                    type="text"
                    className="form-control"
                    name="Activity_name"
                    placeholder="Activity_name"
                    value={formik.values.Activity_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value={" "}> Choose From Following </option>
                    {activity_name.map((update_activity) => (
                      <option
                        value={update_activity.Activity_name}
                      >
                        {update_activity.Activity_name}
                      </option>
                    ))}
                  </select>

                  {formik.touched.Activity_name &&
                  formik.errors.Activity_name ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.Activity_name}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Submit
                </button>
                <ToastContainer/>
              </form>
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

export default Event_form;
