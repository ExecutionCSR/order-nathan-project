import { Button } from "../components/Button";
import { Input } from "../components/Input";
import  "../styles/Login.css";

export function LoginPage(){
    return(
        <div id="loginPage"className='DivForm'>
            <h1 >Login</h1>
            <Input title='Email' type="email" classInput='InpLogin'/>
            <Input title='Senha' type="password" classInput='InpLogin'/>
            <Button title="Login" className="btn btn-primary" onClick={() => {alert("Login");}}/>
        </div>
    )
}