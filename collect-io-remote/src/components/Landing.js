import React from "react";


const Landing = () => (
    <div>
        <div><h1>Evyner</h1></div>
        <div><h4>Everything in Order</h4></div>
        <div>Código:</div>
        <div>
            <select>
                <option value="1">ABDT - Formato de Recepción de MP</option>
                <option value="2">TOEB - Formato de Entrega de MP</option>
                <option value="3">J353 - Formato de Reporte de Falla</option>
                <option value="4">5935 - Formato de Captura de Quejas</option>
            </select>
        </div>
        <div>
            <button>ENTRAR</button>
        </div>
    </div>
);

export default Landing;