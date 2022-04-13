import { useState } from "react";
import { Link } from "react-router-dom";
import { Login} from "../login/Login";
import "./style.css";

export function Dashboard(){
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => {
        if(showElement === true){
            setShowElement(false)
        }
        else{
            setShowElement(true)
        }
    }
    return (
        <div className="container">            
            <Login />
            {/*<Link to='/entrar'>Login</Link>*/}
        </div>
    );
}
