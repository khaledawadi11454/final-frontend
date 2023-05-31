import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

function TableResourceDashboard() {
  const [Data, setData] = useState();
  const [DataById, setDataById] = useState({
    title: "",
    category: "",
    link: "",
    rating: 1,
  });
  const [DataPost, SetPostData] = useState({
    title: "",
    category: "",
    link: "",
    rating: 1,
  });
  const [DataEdit, SetEditData] = useState(null);
  const [Id, setId] = useState();

  const show = () => {
    var ele = document.querySelector(".none");
    ele.classList.toggle("form-add-Resource");
  };

  const [visibleAdd, isShowAdd] = useState(false);
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
    searchPlaceholder: "Search for Resource",
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
      name: "category",
      label: "Category",
    },
    {
      name: "link",
      label: "Link",
    },
    {
      name: "rating",
      label: "Rating",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Box component="fieldset" borderColor="transparent">
              <Rating name="read-only" value={value} readOnly />
            </Box>
          );
        },
      },
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
                      .get(
                        `${process.env.REACT_APP_URL}resource/${tableMeta.rowData[0]}`
                      )
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
                        .delete(
                          `${process.env.REACT_APP_URL}resource/delete/${tableMeta.rowData[0]}`
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
  console.log(Id);
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}resource`, DataById)
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
      .patch(`${process.env.REACT_APP_URL}resource/edit/${Id}`, DataById)
      .then((res) => {
        console.log(res);
        getData();
        console.log(res);
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

  const handleRatingChange = (e) => {
    const value = parseInt(e.target.value);
    setDataById({
      ...DataById,
      rating: value,
    });
  };

  return (
    <div className="Resourcess">
      <div className="none">
        {/* for add expense */}
        {visibleAdd && (
          <form>
            <div className="head-form">
              <h2>Add Resource</h2>
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
              defaultValue={DataById.title}
            />
            <label htmlFor="category"> Category </label>
            <TextField
              type="text"
              name="category"
              required="required"
              onChange={handelChangePost}
              defaultValue={DataById.category}
            />
            <label htmlFor="link"> Link</label>
            <TextField
              type="text"
              name="link"
              onChange={handelChangePost}
              defaultValue={DataById.link}
            />
            <label htmlFor="rating"> Rating</label>
            <div>
              <TextField
                type="number"
                name="rating"
                onChange={handleRatingChange}
                defaultValue={DataById.rating}
                inputProps={{ min: 1, max: 5 }}
              />
              <span>{DataById.rating} stars</span>
            </div>
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  DataPost.title === "" ||
                  DataPost.category === "" ||
                  DataPost.link === "" ||
                  DataPost.rating === ""
                ) {
                  Swal.fire({
                    title: "field is Empty !",
                    icon: "warning",
                    confirmButtonColor: "#447695",
                  });
                } else {
                  axios
                    .post(
                      `${process.env.REACT_APP_URL}resource/`,
                      DataPost
                    )
                    .then((res) => {
                      console.log(res);
                      getData();
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                  Swal.fire({
                    title: "Resource created",
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
        {/* for edit expense */}
        {visibleEdit && (
          <form>
            <div className="head-form">
              <h2>Edit Resource </h2>
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
              defaultValue={DataById.title}
            />
            <label htmlFor="category"> Category</label>
            <TextField
              type="text"
              name="category"
              defaultValue={DataById.category}
              onChange={handelChangeEdit}
            />
            <label htmlFor="link">Link</label>
            <TextField
              type="text"
              name="link"
              defaultValue={DataById.link}
              onChange={handelChangeEdit}
            />
            <label htmlFor="rating">Rating</label>
            <div>
              <TextField
                type="number"
                name="rating"
                defaultValue={DataById.rating}
                onChange={handleRatingChange}
                inputProps={{ min: 1, max: 5 }}
              />
              <span>{DataById.rating} stars</span>
            </div>
            <Button variant="outlined" onClick={EditData}>
              Edit Resource
            </Button>
          </form>
        )}
      </div>
      <div className="Resources_table">
        <h3 className="pagetitle">Resource</h3>
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
                  + Add Resource
                </Button>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TableResourceDashboard;
