import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";
import DeleteComponent from "../../../components/admin/delete/delete.js";
import FormComponent from "../../../components/admin/addForm/addFom.js";
import EditAdmin from "../../../components/admin/editForm/editAdmin.js";

function Offers() {
  const [Offers, setOffers] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_URL}offer`)
      .then((response) => {
        console.log(response);

        setOffers(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const columns = [
    { field: "Name", headerName: "Name", width: 200 },
    { field: "dateStart", headerName: "Date Start", width: 300 },
    { field: "dateEnd", headerName: "Date End", width: 150 },
    { field: "product", headerName: "Product", width: 150 },
    { field: "percentage", headerName: "Percentage", width: 150 },

    {
      field: "Action",
      headerName: "Action",
      width: 275,
      renderCell: (params) => {
        return (
          <>
            <DeleteComponent Id={params.row._id} />
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
    <div>
      <h1>Offers</h1>
      <FormComponent
        inputFields={[
          { name: "userName", label: "User Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "FirstName", label: "FullName", type: "text" },
          { name: "LastName", label: "LastName", type: "text" },
          { name: "password", label: "Password", type: "text" },
        ]}
        title="Offer"
      />
      <Table columns={columns} rows={Offers} />
    </div>
  );
}
export default Offers;
