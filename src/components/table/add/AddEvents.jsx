import axios from "axios";
import React from "react";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";

const Add = (props) => {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_URL}/event/`,
        data
      );
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Event Added",
          showConfirmButton: false,
          timer: 1500,
        });
        props.getData();
      }
      setDisabled(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add event",
      });
      setDisabled(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="edit-section">
        <form onSubmit={handleSubmit}>
          <div className="head-form">
            <h2>Add Resource</h2>
          </div>
          <label htmlFor="title">Title</label>
          <TextField
            type="text"
            name="title"
            required="required"
            onChange={handleChange}
          />
          <label htmlFor="date"> Date </label>
          <TextField
            type="text"
            name="date"
            required="required"
            onChange={handleChange}
          />
          <label htmlFor="description"> Description</label>
          <TextField 
          type="text" 
          name="description" 
          onChange={handleChange} 
          />
          <label htmlFor="location"> Location</label>
          <TextField 
          type="text" 
          name="location" 
          onChange={handleChange} 
          />
          <label htmlFor="Details"> Details</label>
          <TextField 
          type="text" 
          name="Details" 
          onChange={handleChange} 
          />
          {/* <label htmlFor="rating"> Rating</label>
          <div>
            <TextField
              type="number"
              name="rating"
              onChange={handleChange}
              inputProps={{ min: 1, max: 5 }}
            />
            <span>stars</span>
          </div> */}
          <button disabled={disabled}>Add Event</button>
        </form>
      </div>
    </>
  );
};

export default Add;
