import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

function TableFindJobDashboard() {
  const [Data, setData] = useState([]);
  const [DataById, setDataById] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    type: "",
    urldemo: "",
    company: "",
  });
  const [DataPost, SetPostData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    type: "",
    urldemo: "",
    company: "",
  });
  const [DataEdit, SetEditData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    type: "",
    urldemo: "",
    company: "",
  });
  const [Id, setId] = useState("");

  const show = () => {
    var ele = document.querySelector(".none");
    ele.classList.toggle("form-add-Job");
  };

  const [visibleAdd, isShowAdd] = useState(false);
  const [visibleEdit, isShowEdit] = useState(false);
  const [iconEdit, isShowIcon] = useState(true);
  const [iconAdd, isShowIconAdd] = useState(true);

  const showAdd = () => {
    isShowAdd(!visibleAdd);
  };

  const showEdit = () => {
    isShowEdit(!visibleEdit);
  };

  const showicon = () => {
    isShowIcon(!iconEdit);
  };

  const showiconAdd = () => {
    isShowIconAdd(!iconAdd);
  };

  const options = {
    filterType: "checkbox",
    responsive: "simple",
    selectableRows: "none",
    search: true,
    searchPlaceholder: "Search for Job",
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
      name: "description",
      label: "Description",
    },
    {
      name: "location",
      label: "Location",
    },
    {
      name: "salary",
      label: "Salary",
    },
    {
      name: "type",
      label: "Type",
    },
    {
      name: "urldemo",
      label: "Urldemo",
    },
    {
      name: "company",
      label: "Company",
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
                      .get(`${process.env.REACT_APP_URL}/job/${tableMeta.rowData[0]}`)
                      .then((response) => {
                        console.log("res", response);
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
                        .delete(`${process.env.REACT_APP_URL}/job/delete/${tableMeta.rowData[0]}`)
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

  console.log(Id);

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/job/`)
      .then((response) => {
        console.log(response);
        setData(response.data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(DataById);

  useEffect(() => {
    getData();
  }, []);

  const handelChangePost = (e) => {
    const value = e.target.value;
    SetPostData({
      ...DataPost,
      [e.target.name]: value,
    });
    console.log(DataPost);
  };

  const EditData = () => {
    axios
      .patch(`${process.env.REACT_APP_URL}/job/edit/${Id}`, DataEdit)
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
    <div className="Jobss">
      <div className="none">
        {visibleAdd && (
          <form>
            <div className="head-form">
              <h2>Add Job</h2>
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
              required="required"
              onChange={handelChangePost}
              value={DataPost.title}
            />
            <label htmlFor="description"> Description </label>
            <TextField
              type="text"
              name="description"
              required="required"
              onChange={handelChangePost}
              value={DataPost.description}
            />
            <label htmlFor="location"> Location</label>
            <TextField
              type="text"
              name="location"
              onChange={handelChangePost}
              value={DataPost.location}
            />
            <label htmlFor="salary"> Salary</label>
            <TextField
              type="text"
              name="salary"
              onChange={handelChangePost}
              value={DataPost.salary}
            />
            <label htmlFor="type"> Type</label>
            <TextField
              type="text"
              name="type"
              onChange={handelChangePost}
              value={DataPost.type}
            />
            <label htmlFor="urldemo"> Urldemo</label>
            <TextField
              type="text"
              name="urldemo"
              onChange={handelChangePost}
              value={DataPost.urldemo}
            />
            <label htmlFor="company"> Company</label>
            <TextField
              type="text"
              name="company"
              onChange={handelChangePost}
              value={DataPost.company}
            />
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  DataPost.title === "" ||
                  DataPost.description === "" ||
                  DataPost.location === "" ||
                  DataPost.salary === "" ||
                  DataPost.type === "" ||
                  DataPost.urldemo === "" ||
                  DataPost.company === ""
                ) {
                  Swal.fire({
                    title: "field is Empty !",
                    icon: "warning",
                    confirmButtonColor: "#447695",
                  });
                } else {
                  axios
                    .post(`${process.env.REACT_APP_URL}/job/`, DataPost)
                    .then((res) => {
                      console.log(res);
                      getData();
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                  Swal.fire({
                    title: "Job created",
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

        {visibleEdit && (
          <form>
            <div className="head-form">
              <h2>Edit Job </h2>
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
            <label htmlFor="title"> Title</label>
            <TextField
              type="text"
              name="title"
              onChange={handelChangeEdit}
              value={DataEdit ? DataEdit.title : ""}
            />
            <label htmlFor="description"> Description</label>
            <TextField
              type="text"
              name="description"
              onChange={handelChangeEdit}
              value={DataEdit ? DataEdit.description : ""}
            />
            <label htmlFor="location">Location</label>
            <TextField
              type="text"
              name="location"
              onChange={handelChangeEdit}
              value={DataEdit ? DataEdit.location : ""}
            />
            <label htmlFor="salary">Salary</label>
            <TextField
              type="text"
              name="salary"
              onChange={handelChangeEdit}
              value={DataEdit ? DataEdit.salary : ""}
            />
            <label htmlFor="type">Type</label>
            <TextField
              type="text"
              name="type"
              onChange={handelChangeEdit}
              value={DataEdit ? DataEdit.type : ""}
            />
            <label htmlFor="urldemo">UrlDemo</label>
            <TextField
              type="text"
              name="urldemo"
              onChange={handelChangeEdit}
              value={DataEdit ? DataEdit.urldemo : ""}
            />
            <label htmlFor="company">Company</label>
            <TextField
              type="text"
              name="company"
              onChange={handelChangeEdit}
              value={DataEdit ? DataEdit.company : ""}
            />

            <Button variant="outlined" onClick={EditData}>
              Edit Job
            </Button>
          </form>
        )}
      </div>
      <div className="Jobs_table">
        <h1>Dashboard Find Job</h1>
        <Button
          onClick={() => {
            show();
            showicon();
            showAdd();
            showiconAdd();
          }}
          sx={{ marginBottom: "15px" }}
        >
          Add Job
        </Button>
        <MUIDataTable
          title={"List of Jobs"}
          data={Data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

export default TableFindJobDashboard;
