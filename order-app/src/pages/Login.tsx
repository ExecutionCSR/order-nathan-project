import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import  "../styles/Login.css";

export function LoginPage(){
    function handleLogin(){
        <Link to='home' />
        console.log("Login");
    }
    return(
        
        <div id="loginPage"className='DivForm'>
            <h1 >Login</h1>
            <Input  type="email" classDiv='InpLoginEmail' placeholder="Email"/>
            <Input  type="password" classDiv='InpLoginSenha' placeholder="Senha"/>
            <Button title="Entrar" className="BtnLogar" onClick={() => {handleLogin()}}/>
        </div>
    )
}