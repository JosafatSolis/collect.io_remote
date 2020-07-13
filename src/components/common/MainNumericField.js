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
  font-size: xxx-large;
  font-weight: bold;
  text-align: center;
  width: 80%;
  margin: 0px auto 35px auto;
  height: 150px;
  color: red;
`;

const MainNumericField = (props) => {
  return (
    <div>
      <FieldDiv>
        <FieldLabel><FontAwesomeIcon icon={faSort} /> {props.labelText} :</FieldLabel>
      </FieldDiv>
      <NumberInput type="number" placeholder="0.00" name={props.fieldName} step="1" onChange={props.handleChange} />
    </div>
  );
};

export default MainNumericField;
