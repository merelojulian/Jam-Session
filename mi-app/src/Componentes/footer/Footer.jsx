import React from "react";
import './style-footer.css'
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import datosFooter from "./dataFooter";


const Footer = () => {
    return (
        <div>
            {datosFooter.map(item => (
                <div className="containerFooter">
                    <div className="columna2">
                        <div className="imagen">
                            <img src="https://spe.sanjuan.gob.ar/wp-content/uploads/2022/05/logos-gobierno-600x43.png" alt="publi"></img>
                        </div>
                    </div>
                    <div id="formulary">
                        <div className="container-form">
                            <form className="formulario">
                                <input className="form-control" type="text" name="name" placeholder="Nombre" required autofocus></input>
                                <input className="form-control" type="text" name="mail" placeholder="Email" required autofocus></input>
                                <div id="mensaje"><input className="form-control" type="text" name="message" placeholder="Mensaje" required autofocus></input></div>
                                <button type="submit">Consultar</button>
                            </form>
                        </div>
                    </div>
                </div>

            ))}
            <div id="iconos">
                <span id="facebook"> <SiFacebook /><a href="https://es-la.facebook.com/login.php"></a></span>
                <span id="twitter"> <SiTwitter /><a href="https://twitter.com/i/flow/login"></a></span>
                <span id="instagram"> <SiInstagram /><a href="https://www.instagram.com/sanjuantec/?hl=es" ></a></span>
            </div>
            <div id="copyright">
                <div className="copyright">
                    <p>
                        &copy;{new Date().getFullYear()}| San Juan TEC
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer;



