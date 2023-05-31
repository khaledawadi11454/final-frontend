import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
import EditAdmin from "../../../components/admin/editForm/editAdmin";
function Orders(){
    const [Orders, setOrders] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}order`)
        .then((response) => {
          console.log(response);
         
          setOrders(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
    
        { field: "totalprice", headerName: "TotalePrice", width: 300 },
        { field: "customer", headerName: "Customer", width: 300 },
        { field: "product", headerName: "Product", width: 300 },
        { field: "payment", headerName: "Payment", width: 300 },
        { field: "status", headerName: "Status", width: 300 },
        { field: "note", headerName: "Note", width: 300 },

        {
          field: "Action",
          headerName: "Action",
          width: 275,
          renderCell: (params) => {
            return(
              <>
               <DeleteComponent Id={params.row._id} />
               <EditAdmin   inputFields={[
              { name: "userName", label: "User Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "FirstName", label: "FullName", type: "email" },
            ]}
            title="Category"/>
               </>
               );
          },
       
  }];
      
    
return(
    <section>
      <h1>Orders </h1>
      
      <Table columns={columns} rows={Orders} />
      
    </section>
)
}
export default Orders;