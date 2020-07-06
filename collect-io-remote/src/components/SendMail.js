import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const SendMailSection = styled.section`
  margin-top: 30px;
`;

const EmailInput = styled.input`
  font-size: x-large;
  width: 70%;
  max-width: 300px;
  margin: 0px auto 35px auto;
`;

const SendButton = styled.button`
  padding: 1px;
  text-decoration: none;
  color: black;
  font-size: x-large;
`;

const SendMail = () => {
  const sent = false;
  return (
    <SendMailSection>
      {sent && <h2>Mail sent!</h2>}
      {!sent && <div>
        <h3>Send me a copy:</h3>
        <EmailInput type="text" placeholder="email"></EmailInput>
        <SendButton>
          <FontAwesomeIcon icon={faMailBulk} />
        </SendButton>
      </div>}
    </SendMailSection>
  );
};

export default SendMail;
