import React, { useState } from "react";
import styled from "styled-components";
import "./Landing.css";
import logo from "../../assets/blacklogo.png";
import EnterButton from "../common/EnterButton";
import SendMail from "../SendMail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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

const NotFoundH2 = styled.h2`
  color: red;
`;

const Landing = (props) => {

  const [currentState, setCurrentState] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCurrentState(prevState => ({ ...prevState, [key]:value }));
  }

  return (
    <div>
      <LogoImg src={logo} />
      {props.not_found && (
        <div>
          <NotFoundH2>
            CODE not found !!
            <br />
            Try again
          </NotFoundH2>
        </div>
      )}
      {props.resend && (
        <div>
          <h1>Card Sent!!</h1>
          <EnterButton>
            Fill again <FontAwesomeIcon icon={faRetweet} />
          </EnterButton>
        </div>
      )}
      {props.resend && <SendMail />}

      <div>
        {props.resend && <AnotherH2>Fill another:</AnotherH2>}
        {!props.resend && <h2>Code:</h2>}
        <form>
          <CodeInput list="codes" name="code" onChange={handleChange} />
          <datalist id="codes">
            <option value="ABDT - Formato de Recepción de MP" />
            <option value="TOEB - Formato de Entrega de MP" />
            <option value="J353 - Formato de Reporte de Falla" />
            <option value="5935 - Formato de Captura de Quejas" />
          </datalist>
        </form>
      </div>
      <div>
        <Link to={`/${currentState.code}`}>
          <EnterButton>Go!</EnterButton>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
