import React from "react";
import styled from "styled-components";
import TextField from "../common/TextField";

const QuestionsSection = styled.section`
  padding-top: 20px;
  overflow: scroll;
`;

const Filling = () => (
  <div>
    <QuestionsSection>
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
    </QuestionsSection>
  </div>
);

export default Filling;
