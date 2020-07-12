import React from "react";
import styled from "styled-components";
import TextField from "../common/TextField";
import NumberField from "../common/NumberField";
import DateField from "../common/DateField";
import BooleanField from "../common/BooleanField";
import OptionsField from "../common/OptionsField";

const QuestionsSection = styled.section`
  padding-top: 20px;
  overflow: auto;
`;

const Filling = () => (
  <div>
    <QuestionsSection>
      <TextField />
      <NumberField />
      <DateField />
      <BooleanField />
      <OptionsField />
    </QuestionsSection>
  </div>
);

export default Filling;
