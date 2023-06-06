import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import "./edit.css";
import { TextField } from "@mui/material";

const Edit = (props) => {
  const [editData, setEditData] = useState({});

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.patch(
        `${process.env.REACT_APP_URL}/event/edit/${props.id}`,
        editData
      );
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Event Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        props.getData();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update event",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred",
      });
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const getData = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_URL}/event/${props.id}`
      );
      setEditData(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="edit-section">
        <form onSubmit={handleEdit}>
          <div className="head-form">
            <h2>Edit Event</h2>
          </div>
          <label htmlFor="title"> Title</label>
          <TextField
            type="text"
            name="title"
            onChange={handleChange}
            value={editData.title}
          />
          <label htmlFor="date"> Date</label>
          <TextField
            type="text"
            name="date"
            value={editData.date}
            onChange={handleChange}
          />
          <label htmlFor="description">description</label>
          <TextField
            type="text"
            name="description"
            value={editData.description}
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
          <TextField
            type="text"
            name="location"
            value={editData.location}
            onChange={handleChange}
          />
          <label htmlFor="Details">Details</label>
          <TextField
            type="text"
            name="Details"
            value={editData.Details}
            onChange={handleChange}
          />
          {/* <label htmlFor="rating">Rating</label>
          <div>
            <TextField
              type="number"
              name="rating"
              value={editData.rating}
              onChange={handleChange}
              inputProps={{ min: 1, max: 5 }}
            />
            <span>{editData.rating} stars</span>
          </div> */}
          <button>Edit</button>
        </form>
      </div>
    </>
  );
};

export default Edit;
