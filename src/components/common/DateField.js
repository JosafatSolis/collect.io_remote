import React from "react";
import styled from "styled-components";

const FieldDiv = styled.div`
  text-align: left;
  padding-left: 10%;
`;

const FieldLabel = styled.label`
  font-size: x-large;
`;

const DateInput = styled.input`
  font-size: x-large;
  width: 80%;
  margin: 0px auto 35px auto;
`;

const DateField = (props) => {
  return (
    <div>
      <FieldDiv>
        <FieldLabel>{props.fieldName} :</FieldLabel>
      </FieldDiv>
      <DateInput type="date" name={props.fieldName} onChange={props.handleChange}/>
    </div>
  );
};

export default DateField;
