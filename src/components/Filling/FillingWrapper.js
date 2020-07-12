import React, { useContext } from "react";
import AppContext from "../../AppContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Filling from "./Filling";
import EnterButton from "../common/EnterButton";

const HeaderSection = styled.header`
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    hsl(215, 50%, 47%),
    hsl(79, 68%, 52%)
  );
`;

const TitleH1 = styled.h1`
  margin: 0;
  padding: 15px;
  text-align: right;
  display: block;
  float: left;
  text-decoration: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const FillingWrapper = () => {
  const { appState, setAppState } = useContext(AppContext);
  console.log(appState);
  return (
    <div>
      <HeaderSection>
        <Link
          to="/"
          id="headerlink"
          style={{
            padding: "15px",
            float: "left",
            textDecoration: "none",
            color: "white",
            fontSize: "xx-large",
          }}
        >
          <FontAwesomeIcon className="Home-icon" icon={faHome} />{" "}
        </Link>
        <TitleH1>{appState.title}</TitleH1>
      </HeaderSection>
      <h1>Fill out the Card</h1>
      <Filling />
      <section id="footer">
        <Link to={`/${appState.currentCode}/sent`}>
          <EnterButton>Complete!</EnterButton>
        </Link>
      </section>
    </div>
  );
};

export default FillingWrapper;
