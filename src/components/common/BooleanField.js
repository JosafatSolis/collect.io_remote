import React from "react";
import styled from "styled-components";

const FieldDiv = styled.div`
  text-align: left;
  padding-left: 10%;
`;

const FieldLabel = styled.label`
  font-size: x-large;
  width: 80%;
`;

const BoolInput = styled.input`
  transform: scale(2);
  margin: 0px auto 35px 20px;
`;

const BooleanField = (props) => {
  return (
    <div>
      <FieldDiv>
        <FieldLabel>
          {props.fieldName}
          <BoolInput
            type="checkbox"
            name={props.fieldName}
            id={props.fieldName}
            onChange={props.handleChange}
          />
        </FieldLabel>
      </FieldDiv>
    </div>
  );
};

export default BooleanField;
