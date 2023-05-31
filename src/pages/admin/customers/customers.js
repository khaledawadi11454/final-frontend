import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";
import DeleteComponent from "../../../components/admin/delete/delete.js";
import FormComponent from "../../../components/admin/addForm/addFom.js";
import EditAdmin from "../../../components/admin/editForm/editAdmin.js";

function Customers() {
  const [Customers, setCustomers] = useState([]);


  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_URL}customer`)
      .then((response) => {
        console.log(response);
      
        setCustomers(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [

    { field: "name", headerName: "Name", width: 200 },
    { field: "phoneNum", headerName: "Phone Number", width: 200},
    { field: "email", headerName: "Email", width: 250 }, 
    { field: "address", headerName: "Address", width: 250 },
    {
      field: "Action",
      headerName: "Action",
      width: 275,
      renderCell: (params) => {
        return(
          <>
           <DeleteComponent Id={params.row._id} />
           <EditAdmin   inputFields={[
          { name: "name", label: "Name", type: "text" },
          { name: "phoneNum", label: "Phone Number ", type: "email" },
          { name: "FirstName", label: "FullName", type: "email" },
        ]}
        title="Customer"
        url="customer"
        Id={params.row._id}
        />
           </>
           );
      },
   
}
  ];

  return (
    <div>
      <h1>Customers</h1>
     <FormComponent    inputFields={[
          { name: "name", label: "Name", type: "text" },
          { name: "phoneNum", label: "Phone Number", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "address", label: "Address", type: "text" },
          { name: "password", label: "Password", type: "text" },
        ]}
        title="Customer"
        url="customer"
        />
      <Table columns={columns} rows={Customers} />
    </div>
  );
}

export default Customers;
