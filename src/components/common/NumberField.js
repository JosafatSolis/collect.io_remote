import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";


const FieldDiv = styled.div`
  text-align: left;
  padding-left: 10%;
`;

const FieldLabel = styled.label`
  font-size: x-large;
`;

const NumberInput = styled.input`
  font-size: x-large;
  text-align: center;
  width: 80%;
  margin: 0px auto 35px auto;
`;

const NumberField = (props) => {
  return (
    <div>
      <FieldDiv>
        <FieldLabel><FontAwesomeIcon icon={faSort} /> Field Name... :</FieldLabel>
      </FieldDiv>
      <NumberInput type="number" step="1" />
    </div>
  );
};

export default NumberField;
