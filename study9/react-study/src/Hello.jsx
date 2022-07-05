import React from 'react';
import styled from 'styled-components';
import './Hello.css'

function Hello(){
  const StyledButton = styled.button`
    color: red;
    background-color: gray;
  `;
  return <StyledButton>Hello World!</StyledButton>;
}

export default Hello;