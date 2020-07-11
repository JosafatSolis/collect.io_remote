import React from "react";
import styled from "styled-components";

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

const BooleanField = (props) => {
  return (
    <div>
      <FieldDiv>
        <FieldLabel>Field Name... :</FieldLabel>
      </FieldDiv>
      <TextInput rows="2"/>
    </div>
  );
};

export default BooleanField;
