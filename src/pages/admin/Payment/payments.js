import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";
import DeleteComponent from "../../../components/admin/delete/delete.js";
import FormComponent from "../../../components/admin/addForm/addFom.js";
import EditAdmin from "../../../components/admin/editForm/editAdmin.js";
import { Avatar } from "@mui/material";

function Payment() {
  const [Payment, setPayment] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_URL}Payment`)
      .then((response) => {
        console.log(response);
      

        setPayment(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const columns = [
    { field: "Name", headerName: "Name", width: 400 },
    {
      field: "image",
      headerName: "Image",
      width: 400,
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
            <DeleteComponent Id={params.row._id} />
            <EditAdmin
              inputFields={[
                { name: "Name", label: "Name", type: "text" },
                { name: "image", label: "Image", type: "file" },
              ]}
              title="Payment"
              url="payment"
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Payment</h1>
      <FormComponent
      inputFields={[
        { name: "Name", label: "Name", type: "text" },
        { name: "image", label: "Image", type: "file" },
      ]}
      title="Payment"
      url="payment"
      />
      <Table columns={columns} rows={Payment} />
    </div>
  );
}
export default Payment;
