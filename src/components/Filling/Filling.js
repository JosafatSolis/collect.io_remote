import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postNewRecord } from "../../services/apiServices";
import styled from "styled-components";
import TextField from "../common/TextField";
import DateField from "../common/DateField";
import NumberField from "../common/NumberField";
import EnterButton from "../common/EnterButton";
import BooleanField from "../common/BooleanField";
import MainNumericField from "../common/MainNumericField";

const QuestionsSection = styled.section`
  padding-top: 20px;
  overflow: auto;
`;

const Filling = (props) => {
  const [currentState, setCurrentState] = useState({});

  useEffect(() => {
    const addInitValue = (key, value) => {
      setCurrentState((prevState) => ({ ...prevState, [key]: value }));
    };

    const defineInitValue = (type) => {
      switch (type) {
        case "String":
          // Nothing is added as default
          return undefined;
        case "Number":
          return 0;
        case "Date":
          // Nothing is added as default
          return undefined;
        case "Boolean":
          return false;
        default:
          console.log("Field type not found!!");
          return undefined;
      }
    };

    props.appState.tagFields.forEach((tagField) => {
      addInitValue(tagField.fieldName, defineInitValue(tagField.type));
    });
  }, [props.appState.tagFields]);

  const handleChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    setCurrentState((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleCheckedChange = (e) => {
    const key = e.target.name;
    let value = e.target.checked;
    setCurrentState((prevState) => ({ ...prevState, [key]: value }));
  };

  const history = useHistory();

  const addValueField = () => {
    const { value, ...tagValues } = currentState;
    // Loops all tags and adds value field to each
    let tags = [];
    for (var key in tagValues) {
      const keyName = key;
      let tagField = props.appState.tagFields.filter(
        (tagField) => tagField.fieldName === keyName
      )[0];
      tagField.value = tagValues[key];
      tags.push(tagField);
    }
    return tags;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const complete =
      1 + props.appState.tagFields.length ===
      Object.values(currentState).filter((val) => typeof val !== "undefined").length;
    if (complete) {
      const newRecord = {
        format: props.appState._id,
        value: currentState.value,
        code: props.appState.currentCode,
        tagValues: addValueField(),
      };
      postNewRecord(newRecord)
        .then((resp) => {
          props.setAppState((prevState) => ({ ...prevState, resend: true }));
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
              case "Number":
                return (
                  <NumberField
                    key={tagField.fieldName}
                    handleChange={handleChange}
                    fieldName={tagField.fieldName}
                  />
                );
              case "Date":
                return (
                  <DateField
                    key={tagField.fieldName}
                    handleChange={handleChange}
                    fieldName={tagField.fieldName}
                  />
                );
              case "Boolean":
                return (
                  <BooleanField
                    key={tagField.fieldName}
                    handleChange={handleCheckedChange}
                    fieldName={tagField.fieldName}
                  />
                );
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
