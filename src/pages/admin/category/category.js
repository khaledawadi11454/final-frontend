import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
import FormComponent from "../../../components/admin/addForm/addFom";
import { Avatar } from "@mui/material";
import EditAdmin from "../../../components/admin/editForm/editAdmin";

function Category() {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_URL}category`)
      .then((response) => {
        console.log(response);
       
        setCategory(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const columns = [
    { field: "Name", headerName: "Name", width: 350 },
    {
      field: "image",
      headerName: "Image",
      width: 300,
      renderCell: (params) => {
        return <Avatar alt="Remy Sharp" src={params.row.image} />;
      },
    },

    {
      field: "Action",
      headerName: "Action",
      width: 275,
      renderCell: (params) => {
        return (
          <>
            <DeleteComponent
              title="Category"
              url="category"
              Id={params.row._id}
            />
            <EditAdmin
              inputFields={[
                { name: "userName", label: "User Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "FirstName", label: "FullName", type: "email" },
              ]}
              title="Category"
              Id={params.row._id}
            />
          </>
        );
      },
    },
  ];

  return (
    <section>
      <h1>Categories </h1>
      <FormComponent
        inputFields={[
          { name: "Name", label: "Name", type: "text" },
          { name: "image", label: "Image", type: "file" },
        ]}
        title="Category"
        url="category"
      />

      <Table columns={columns} rows={Category} />
    </section>
  );
}
export default Category;
