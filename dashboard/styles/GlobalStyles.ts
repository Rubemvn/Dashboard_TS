"use client";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, :root{
  height: 100%;
}

body{
  width: 100%;
  height: 100vh;
}

*, button, input {
  border: 1;
  outline: 0;
  font-family: 'Inter', 'Roboto';
}

button {
  cursor: pointer;
}
`;
