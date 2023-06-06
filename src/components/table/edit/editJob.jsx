import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./edit.css";
import { TextField, Select, MenuItem } from "@mui/material";

const Edit = (props) => {
  const [editData, setEditData] = useState({});

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.patch(
        `${process.env.REACT_APP_URL}/job/edit/${props.id}`,
        editData
      );
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Job Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        props.getData();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update job",
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
        `${process.env.REACT_APP_URL}/job/${props.id}`
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
            <h2>Edit Job</h2>
          </div>
          <label htmlFor="title"> Title</label>
          <TextField
            type="text"
            name="title"
            onChange={handleChange}
            value={editData.title}
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
          <label htmlFor="salary"> Salary</label>
          <TextField
            type="text"
            name="salary"
            value={editData.salary}
            onChange={handleChange}
          />
          <label htmlFor="type">Type</label>
          <Select name="type" value={editData.type} onChange={handleChange}>
            <MenuItem value="freelancer">Freelancer</MenuItem>
            <MenuItem value="fulltime">Full-time</MenuItem>
            <MenuItem value="parttime">Part-time</MenuItem>
          </Select>
          <label htmlFor="company">Company</label>
          <TextField
            type="text"
            name="company"
            value={editData.company}
            onChange={handleChange}
          />  
          <label htmlFor="urldemo">Urldemo</label>
          <TextField
            type="text"
            name="urldemo"
            value={editData.urldemo}
            onChange={handleChange}
          />
          <button>Edit</button>
        </form>
      </div>
    </>
  );
};

export default Edit;
