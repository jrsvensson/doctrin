import React from "react";
import styled from "styled-components";

const TextInput = styled.input.attrs(
    {type: "text"}
)`
  color: #000;
  border: 2px solid #3fb6df;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 16px;
  border-radius: 4px;
`;

export default TextInput;