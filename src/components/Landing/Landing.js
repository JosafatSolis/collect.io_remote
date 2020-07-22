import React, { useState, useContext } from "react";
import AppContext from "../../AppContext";
import styled from "styled-components";
import "./Landing.css";
import logo from "../../assets/blacklogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import EnterButton from "../common/EnterButton";

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

const RedH2 = styled.h2`
  color: red;
`;

const Landing = (props) => {
  const { appState } = useContext(AppContext);

  const [currentState, setCurrentState] = useState({});
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCurrentState((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <div>
      <LogoImg src={logo} />
      {props.not_found && (
        <div>
          <RedH2>
            CODE not found !!
            <br />
            Try again
          </RedH2>
        </div>
      )}
      {appState.resend && (
        <div>
          <RedH2>Card Sent!!</RedH2>
          <Link to={`/${appState.currentCode}`}>
            <EnterButton>
              <span>Fill again <FontAwesomeIcon icon={faRetweet} /></span>
            </EnterButton>
          </Link>
        </div>
      )}

      <div>
        {appState.resend && <AnotherH2>Fill another:</AnotherH2>}
        {!appState.resend && <h2>Code:</h2>}
        <form>
          <CodeInput list="codes" name="code" onChange={handleChange} />
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
