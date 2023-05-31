import LoginComponent from '../../../components/admin/loginComponent/loginComponent.js'
import './login.css'
import axios from 'axios'
import login from './login.png'
function LoginAdmin(){
return (
  <section className="loginAdmin">
    <section className="loginAdmin-left">
        <img src={login} alt="login_image" />
    </section>
    <section className="loginAdmin-right">
    <LoginComponent/>
    </section>
  </section>
)
}
export default LoginAdmin