import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import React from "react";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Edit from "./edit/editJob";
import Add from "./add/AddJob";

const TableJobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [add, setAdd] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`${process.env.REACT_APP_URL}/job`);
      setJobs(res.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#447695",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${process.env.REACT_APP_URL}/job/delete/${id}`)
          .then((response) => {
            console.log(response);
            getData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handleShowEdit = (id) => {
    setEditId(id);
    setEdit(true);
    setAdd(false);
  };

  const columns = [
    {
      field: "title",
      headerName: "Title",
    },
    {
      field: "description",
      headerName: "Description",
    },
    {
      field: "location",
      headerName: "Location",
    },
    {
      field: "salary",
      headerName: "Salary",
    },
    {
      field: "type",
      headerName: "Type",
    },
    {
      field: "company",
      headerName: "Company",
    },
    {
      field: "urldemo",
      headerName: "urldemo",
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <>
            <div className="actions-section">
              <AiFillEdit
                style={{ color: "darkblue" }}
                onClick={() => handleShowEdit(params.row._id)}
              />
              <MdDelete
                onClick={() => handleDelete(params.row._id)}
                style={{ color: "darkred" }}
              />
            </div>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  const handleShowAdd = () => {
    setEdit(false);
    setAdd((prev) => !prev);
  };

  return (
    <div className="tables-and-forms">
      <Box
        sx={{
          height: "75vh",
          width: "60%",
          marginTop: "1rem",
          borderRadius: "12px",
          marginLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        // Center the table horizontally
      >
        <button style={{ width: "25%" }} onClick={handleShowAdd}>
          Add Job
        </button>
        <DataGrid
          rowHeight={80}
          checkboxSelection={false}
          rows={jobs}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={5}
          loading={loading}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
                page: 5,
              },
            },
          }}
        />
      </Box>
      {edit && (
        <Edit
          id={editId}
          getData={() => {
            getData();
            setEdit(false);
          }}
        />
      )}
      {add && (
        <Add
          getData={() => {
            getData();
            setAdd(false);
          }}
        />
      )}
    </div>
  );
};

export default TableJobDashboard;
