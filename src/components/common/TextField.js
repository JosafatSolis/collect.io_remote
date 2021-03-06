import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faParagraph } from "@fortawesome/free-solid-svg-icons";

const FieldDiv = styled.div`
  text-align: left;
  padding-left: 10%;
`;

const FieldLabel = styled.label`
  font-size: x-large;
`;

const TextInput = styled.textarea`
  font-size: x-large;
  width: 80%;
  margin: 0px auto 35px auto;
`;

const TextField = (props) => {
  return (
    <div>
      <FieldDiv>
        <FieldLabel><FontAwesomeIcon icon={faParagraph} /> {props.fieldName} :</FieldLabel>
      </FieldDiv>
      <TextInput name={props.fieldName} rows="2" onChange={props.handleChange} />
    </div>
  );
};

export default TextField;
