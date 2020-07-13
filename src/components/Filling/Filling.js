import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postNewRecord } from "../../services/apiServices";
import styled from "styled-components";
import TextField from "../common/TextField";
import NumberField from "../common/NumberField";
import DateField from "../common/DateField";
import BooleanField from "../common/BooleanField";
import EnterButton from "../common/EnterButton";
import MainNumericField from "../common/MainNumericField";

const QuestionsSection = styled.section`
  padding-top: 20px;
  overflow: auto;
`;

const Filling = (props) => {
  const [currentState, setCurrentState] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    console.log(value);
    // if (value === "on") value = true;
    // if (value === "off") value = false;
    setCurrentState((prevState) => ({ ...prevState, [key]: value }));
    console.log(currentState);
  };
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const complete =
      1 + props.appState.tagFields.length === Object.keys(currentState).length;
    if (complete) {
      const { value, ...tagValues } = currentState;
      // Recorre los tags y agrega el valor a lo original
      let tags = [];
      for (var key in tagValues) {
        let tagField = props.appState.tagFields.filter(
          (tagField) => tagField.fieldName === key
        )[0];
        tagField.value = tagValues[key];
        tags.push(tagField);
      }
      const newRecord = {
        format: props.appState._id,
        value,
        code: props.appState.currentCode,
        tagValues: tags,
      };
      postNewRecord(newRecord)
        .then((resp) => {
          history.push(`/${props.appState.currentCode}/sent`);
        })
        .catch((reason) => {
          alert("An error ocurred while sending, try again!");
        });
    } else {
      alert("Complete all the fields to Submit!");
    }
  };

  return (
    <div>
      <form>
        <QuestionsSection>
          <MainNumericField
            handleChange={handleChange}
            fieldName="value"
            labelText={props.appState.mainNumericFieldName}
          />
          {props.appState.tagFields.map((tagField) => {
            switch (tagField.type) {
              case "String":
                return (
                  <TextField
                    key={tagField.fieldName}
                    handleChange={handleChange}
                    fieldName={tagField.fieldName}
                  />
                );
                break;
              case "Number":
                return (
                  <NumberField
                    key={tagField.fieldName}
                    handleChange={handleChange}
                    fieldName={tagField.fieldName}
                  />
                );
                break;
              case "Date":
                return (
                  <DateField
                    key={tagField.fieldName}
                    handleChange={handleChange}
                    fieldName={tagField.fieldName}
                  />
                );
                break;
              case "Boolean":
                return (
                  <BooleanField
                    key={tagField.fieldName}
                    handleChange={handleChange}
                    fieldName={tagField.fieldName}
                  />
                );
                break;
              default:
                console.log("Field type not found!!");
                break;
            }
          })}
        </QuestionsSection>
        <section id="footer">
          <EnterButton onClick={handleSubmit}>Complete!</EnterButton>
        </section>
      </form>
    </div>
  );
};

export default Filling;
