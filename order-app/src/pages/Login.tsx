import { Button } from "../components/Button";
import { Input } from "../components/Input";
import  "../styles/Login.css";

export function LoginPage(){
    return(
        <div id="loginPage"className='DivForm'>
            <h1 >Login</h1>
            <Input  type="email" classInput='InpLogin' placeholder="Email"/>
            <Input  type="password" classInput='InpLogin' placeholder="Senha"/>
            <Button title="Entrar" className="BtnLogar" onClick={() => {alert("Login");}}/>
        </div>
    )
}