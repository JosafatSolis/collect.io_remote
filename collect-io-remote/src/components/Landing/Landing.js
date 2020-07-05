import React from "react";
import styled from "styled-components";
import "./Landing.css";
import logo from "../../assets/blacklogo.png";

const LogoImg = styled.img`
  width: 175px;
  margin: 40px auto auto auto;
`;

const CodeInput = styled.input`
    font-size: xx-large;
    width: 80%;
    margin: 0px auto 35px auto;
`;

const EnterButton = styled.button`
    width: 50%;
    height: 1.6em;
    font-size: xx-large;
    background-image: linear-gradient(
        to right,
        hsl(211, 100%, 50%),
        hsl(179, 100%, 30%)
    );
    transition: background-image 0.5s linear;
    color: #FFF;
    border-radius: 5px;
`;

const Landing = () => (
  <div>
    <LogoImg src={logo} />
    <h2>Code:</h2>
    <div>
      <form>
        <CodeInput list="codes" name="code" />
        <datalist id="codes">
          <option value="ABDT - Formato de Recepción de MP" />
          <option value="TOEB - Formato de Entrega de MP" />
          <option value="J353 - Formato de Reporte de Falla" />
          <option value="5935 - Formato de Captura de Quejas" />
        </datalist>
      </form>
    </div>
    <div>
      <EnterButton>Go!</EnterButton>
    </div>
  </div>
);

export default Landing;
