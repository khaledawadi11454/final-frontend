import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Rating from "@mui/material/Rating";
import "./TableResourceDashboard.css";
import React from "react";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Edit from "./edit/edit";
import Add from "./add/Add";

const TableResourceDashboard = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [add, setAdd] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`${process.env.REACT_APP_URL}/resource`);
      setResources(res.data.message);
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
          .delete(`${process.env.REACT_APP_URL}/resource/delete/${id}`)
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
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "link",
      headerName: "Link",
      width: 150,
    },

    {
      field: "rating",
      headerName: "Rating",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Box component="fieldset" borderColor="transparent">
              <Rating
                name="read-only"
                value={params.row.rating}
                readOnly
                sx={{ width: "90%" }}
              />{" "}
            </Box>
          </>
        );
      },
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
      >
        <button style={{ width: "15%" }} onClick={handleShowAdd}>
          Add Resource
        </button>
        <DataGrid
          rowHeight={60}
          checkboxSelection={false}
          rows={resources}
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
                page: 5
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

export default TableResourceDashboard;
