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
        <FieldLabel><FontAwesomeIcon icon={faSort} /> {props.fieldName} :</FieldLabel>
      </FieldDiv>
      <NumberInput type="number" name={props.fieldName} step="1" placeholder="0" onChange={props.handleChange} />
    </div>
  );
};

export default NumberField;
