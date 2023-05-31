import { useEffect, useState } from "react";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import "./adminPage.css";
import CustomizedMenus from "../../../components/admin/role";
import FormComponent from "../../../components/admin/addForm/addFom";

function AdminPage() {
  const [Admin, setAdmin] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}auth`)
      .then((response) => {
        console.log(response.data.response);
     
        setAdmin(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function Role(admin) {
    if (admin.role === 1) {
      return "admin";
    } else if (admin.role === 0) {
      return "super admin";
    }
  }

  return (
    <section>
      <h1>Admin</h1>
      <FormComponent
        inputFields={[
          { name: "username", label: "User Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "first_name", label: "FullName", type: "text" },
          { name: "last_name", label: "LastName", type: "text" },
          { name: "password", label: "Password", type: "text" },
        ]}
        title="Admin"
        url="auth"
      />

      <section className="admin-cards">
        {Admin.map((admin) => {
          return (
            <div className="card"key={admin._id}>
              <div className="interests" >
                <CustomizedMenus id={admin._id} />
              </div>
              <div className="left">
                <div className="flag_wrapper">
                  <PersonIcon sx={{ marginTop: "17px" }} />

                  <section className="admin_action"></section>
                </div>
              </div>

              <div className="right">
                <h2 className="name">{admin.username}</h2>
                <p className="title">{admin.email}</p>
                <p className="location">
                  {admin.first_name} {admin.last_name}
                </p>

                <p className="interests_title">Role:{Role(admin)} </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
export default AdminPage;
