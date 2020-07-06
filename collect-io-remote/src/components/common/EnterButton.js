import styled from "styled-components";

const EnterButton = styled.button`
width: 50%;
max-width: 200px;
height: 1.6em;
font-size: xx-large;
background-image: linear-gradient(
    to right,
    hsl(211, 100%, 50%),
    hsl(179, 100%, 30%)
);
transition: background-image 0.5s linear;
color: #FFF;
border-radius: 5px;
overflow: auto;
margin-bottom: 20px;
`;

export default EnterButton;