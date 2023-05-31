import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
import FormComponent from "../../../components/admin/addForm/addFom";
import EditAdmin from "../../../components/admin/editForm/editAdmin";
import { PropaneSharp } from "@mui/icons-material";
function SubCategory() {
  const [SubCategory, setSubCategory] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_URL}subCategory`)
      .then((response) => {
        console.log(response);
        // add an `id` property to each row object
        const data = response.data.message.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setSubCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const columns = [
    { field: "name", headerName: "Name", width: 450 },
    { field: "category", headerName: "Category", width: 300,  valueGetter: (params) => {
      if (params.row.category && params.row.category.Name) {
        return params.row.category.Name;
      }else{
        return "No category yet"
      }
    }
   },

    {
      field: "Action",
      headerName: "Action",
      width: 275,
      renderCell: (params) => {
        return (
          <>
            <DeleteComponent Id={params.row.id} />
            <EditAdmin
              inputFields={[
                { name: "userName", label: "User Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "FirstName", label: "FullName", type: "email" },
              ]}
              title="Category"
            />
          </>
        );
      },
    },
  ];

  return (
    <section>
      <h1>SubCategories </h1>
      <FormComponent
        inputFields={[{ name: "name", label: "Name", type: "text" }]}
        url="subCategory"
        title="subCategory"
      />
      <Table columns={columns} rows={SubCategory} />
    </section>
  );
}
export default SubCategory;
