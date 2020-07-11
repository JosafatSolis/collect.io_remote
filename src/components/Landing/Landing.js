import React from "react";
import styled from "styled-components";
import "./Landing.css";
import logo from "../../assets/blacklogo.png";
import EnterButton from "../common/EnterButton";
import SendMail from "../SendMail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";


const LogoImg = styled.img`
  width: 175px;
  margin: 40px auto auto auto;
`;

const AnotherH2 = styled.h2`
  margin-top: 30px;
`;

const CodeInput = styled.input`
  font-size: xx-large;
  width: 80%;
  max-width: 250px;
  margin: 0px auto 35px auto;
`;

const Landing = (props) => (
  <div>
    <LogoImg src={logo} />
    {props.resend && (
      <div>
        <h1>Card Sent!!</h1>
        <EnterButton>Fill again <FontAwesomeIcon icon={faRetweet} /></EnterButton>
      </div>
    )}
    {props.resend && <SendMail />}

    <div>
      {props.resend && <AnotherH2>Fill another:</AnotherH2>}
      {!props.resend && <h2>Code:</h2>}
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
