import axios from "axios";
import React from "react";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";

const Add = (props) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_URL}/resource/`,
        data
      );
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Resource Added",
          showConfirmButton: false,
          timer: 1500,
        });
        props.getData();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add resource",
      });
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
          <label htmlFor="category"> Category </label>
          <TextField
            type="text"
            name="category"
            required="required"
            onChange={handleChange}
          />
          <label htmlFor="link"> Link</label>
          <TextField type="text" name="link" onChange={handleChange} />
          <label htmlFor="rating"> Rating</label>
          <div>
            <TextField
              type="number"
              name="rating"
              onChange={handleChange}
              inputProps={{ min: 1, max: 5 }}
            />
            <span>stars</span>
          </div>
          <button>Add Resource</button>
        </form>
      </div>
    </>
  );
};

export default Add;
