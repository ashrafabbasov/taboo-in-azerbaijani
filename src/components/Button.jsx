import React from "react";
import styled from "styled-components";

export const Button = ({ icon, text, backgroundColor, border }) => {
  return (
    <Container border={border} backgroundColor={backgroundColor}>
      {text}
      {!!icon && (
        <img style={{ width: "23px", height: "23" }} src={icon} alt={"icon"} />
      )}
    </Container>
  );
};

const Container = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  margin: 0 10px;
  padding: 10px;
  width: 100%;
  border: ${(props) => (props.border ? "1px solid gray" : "none")};
  font-size: 20px;
  &:hover {
    opacity: 0.9;
  }
  color: white;
`;
