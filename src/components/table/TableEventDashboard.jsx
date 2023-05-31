import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

function TableEventDashboard() {
  const [Data, setData] = useState([]);
  const [DataById, setDataById] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
    Details: [],
  });
  const [DataPost, SetPostData] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
    Details: [],
  });
  const [DataEdit, SetEditData] = useState(null);
  const [Id, setId] = useState();

  const show = () => {
    var ele = document.querySelector(".nonee");
    ele.classList.toggle("form-add-Event");
  };

  const [visibleAdd, isShowAdd] = useState(true);
  const [visibleEdit, isShowEdit] = useState(false);
  const [iconEdit, isShowIcon] = useState(true);
  const [iconAdd, isShowIconAdd] = useState(true);

  const showAdd = () => {
    if (visibleAdd === false) {
      isShowAdd(true);
    } else {
      isShowAdd(false);
    }
  };
  const showEdit = () => {
    if (visibleEdit === false) {
      isShowEdit(true);
    } else {
      isShowEdit(false);
    }
  };

  const showicon = () => {
    iconEdit ? isShowIcon(false) : isShowIcon(true);
  };
  const showiconAdd = () => {
    iconAdd ? isShowIconAdd(false) : isShowIconAdd(true);
  };

  const options = {
    filterType: "checkbox",
    responsive: "simple",
    selectableRows: "none",
    search: true,
    searchPlaceholder: "Search for Event",
    download: true,
    print: true,
    pagination: true,
    rowsPerPage: 5,
    loaded: true,
    rowsPerPageOptions: [5],
  };

  const columns = [
    {
      name: "_id",
      label: " ",
      options: {
        display: "none",
      },
    },
    {
      name: "title",
      label: "Title",
    },
    {
      name: "date",
      label: "Date",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "location",
      label: "Location",
    },
    {
      name: "Details",
      label: "Details",
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              {iconEdit && (
                <Button
                  sx={{ height: "40px" }}
                  onClick={() => {
                    axios
                      .get(`${process.env.REACT_APP_URL}event/${tableMeta.rowData[0]}`)
                      .then((response) => {
                        setDataById(response.data.message);
                        setId(tableMeta.rowData[0]);
                        show();
                        showiconAdd();
                        showEdit();
                      })
                      .catch((err) => {
                        console.log(err.message);
                      });
                  }}
                >
                  <AiFillEdit />
                </Button>
              )}
              <Button
                sx={{ height: "40px" }}
                onClick={() => {
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
                        .delete(
                          `${process.env.REACT_APP_URL}event/delete/${tableMeta.rowData[0]}`
                        )
                        .then((response) => {
                          console.log(response);
                          getData();
                        })
                        .catch((err) => {
                          console.log(err.message);
                        });
                    }
                  });
                }}
              >
                <MdDelete />
              </Button>
            </div>
          );
        },
      },
    },
  ];

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}event`)
      .then((response) => {
        setData(response.data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handelChangePost = (e) => {
    const value = e.target.value;
    SetPostData({
      ...DataPost,
      [e.target.name]: value,
    });
  };

  const EditData = () => {
    axios
      .patch(`${process.env.REACT_APP_URL}event/edit/${Id}`, DataEdit)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChangeEdit = (e) => {
    const value = e.target.value;
    SetEditData({
      ...DataEdit,
      [e.target.name]: value,
    });
  };

  return (
    <div className="Eventss">
      <div className="nonee">
        {/* for add event */}
        {visibleAdd && (
          <form>
            <div className="head-form">
              <h2>Add Event</h2>
              <button
                onClick={() => {
                  show();
                  showAdd();
                  showicon();
                }}
              >
                x
              </button>
            </div>
            <label htmlFor="title">Title</label>
            <TextField
              type="text"
              name="title"
              required={true}
              onChange={handelChangePost}
              defaultValue={DataById.title}
            />
            <label htmlFor="date">Date</label>
            <TextField
              type="text"
              name="date"
              required={true}
              onChange={handelChangePost}
              defaultValue={DataById.date}
            />
            <label htmlFor="description">Description</label>
            <TextField
              type="text"
              name="description"
              onChange={handelChangePost}
              defaultValue={DataById.description}
            />
            <label htmlFor="location">Location</label>
            <TextField
              type="text"
              name="location"
              onChange={handelChangePost}
              defaultValue={DataById.location}
            />
            <label htmlFor="Details">Details</label>
            <TextField
              type="text"
              name="Details"
              onChange={handelChangePost}
              defaultValue={DataById.Details}
            />
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  DataPost.title === "" ||
                  DataPost.date === "" ||
                  DataPost.description === "" ||
                  DataPost.location === "" ||
                  DataPost.Details === ""
                ) {
                  Swal.fire({
                    title: "Field is Empty!",
                    icon: "warning",
                    confirmButtonColor: "#447695",
                  });
                } else {
                  axios
                    .post(`${process.env.REACT_APP_URL}event/`, DataPost)
                    .then((res) => {
                      console.log(res);
                      getData();
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                  Swal.fire({
                    title: "Event created",
                    icon: "success",
                    iconColor: "#d0e9e7",
                    confirmButtonColor: "#447695",
                  });
                }
              }}
            >
              Submit
            </Button>
          </form>
        )}
        {/* for edit event */}
        {visibleEdit && (
          <form>
            <div className="head-form">
              <h2>Edit Event </h2>
              <button
                onClick={() => {
                  show();
                  showEdit();
                  showiconAdd();
                  SetEditData(null);
                }}
              >
                x
              </button>
            </div>
            <label htmlFor="title">Title</label>
            <TextField
              type="text"
              name="title"
              onChange={handelChangeEdit}
              defaultValue={DataById.title}
            />
            <label htmlFor="date">Date</label>
            <TextField
              type="text"
              name="date"
              defaultValue={DataById.date}
              onChange={handelChangeEdit}
            />
            <label htmlFor="description">Description</label>
            <TextField
              type="text"
              name="description"
              defaultValue={DataById.description}
              onChange={handelChangeEdit}
            />
            <label htmlFor="location">Location</label>
            <TextField
              type="text"
              name="location"
              defaultValue={DataById.location}
              onChange={handelChangeEdit}
            />
            <label htmlFor="Details">Details</label>
            <TextField
              type="text"
              name="Details"
              defaultValue={DataById.Details}
              onChange={handelChangeEdit}
            />
            <Button variant="outlined" onClick={EditData}>
              Edit Event
            </Button>
          </form>
        )}
      </div>
      <div className="Events_table">
        <h3 className="pagetitle">Event</h3>
        <div className="table_mui">
          <MUIDataTable
            columns={columns}
            data={Data}
            options={options}
            title={
              iconAdd && (
                <Button
                  onClick={() => {
                    show();
                    showAdd();
                    showicon();
                  }}
                >
                  + Add Event
                </Button>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TableEventDashboard;
