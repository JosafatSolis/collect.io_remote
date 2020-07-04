import React from "react";

const Sent = () => (
    <div>
        <div><h1>¡¡ Enviado !!</h1></div>
        <div>Enviar copia a mi correo:</div>
        <div><input type="text" placeholder="email"></input><button>=&gt</button></div>
        <div>Tarjetas completadas: 28</div>
        <div><button>Reenviar</button></div>
        <div>Llenar otro:</div>
        <div>
            <select>
                <option value="1">ABDT - Formato de Recepción de MP</option>
                <option value="2">TOEB - Formato de Entrega de MP</option>
                <option value="3">J353 - Formato de Reporte de Falla</option>
                <option value="4">5935 - Formato de Captura de Quejas</option>
            </select>
        </div>
        <div><button>Entrar</button></div>
    </div>
);

export default Sent;