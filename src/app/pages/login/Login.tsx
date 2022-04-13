import { useCallback, useState } from "react";
import "./csLogin.css";
import { Link } from "react-router-dom";


export function Login() {
    
    return (
        <div>
            <form className="container2" method="get">
                <h3>Yolanda Sys</h3>
                <label className="email">
                    <span>Email </span>
                    <input type="email" />
                </label>

                <label className="senha">
                    <span>Senha </span>
                    <input type="password" />
                </label>
              
               
                    <Link to='/menu' className="btn">
                    <button className="btn" type="button">
                        ENTRAR
                    </button>
                    </Link>
                
            </form>
        </div>
    );
}