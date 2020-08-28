import React from "react";
import styled from "styled-components";

export const GameCard = ({ card }) => {
  return (
    <Container>
      <CardHeader>{card.word}</CardHeader>
      <CardBody>
        {card.taboos.map((item, i) => (
          <CardItem key={i}>{item}</CardItem>
        ))}
      </CardBody>
    </Container>
  );
};
const Container = styled.div`
  width: 300px;
  margin-top: 10px;
`;
const CardHeader = styled.div`
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ff2e62;
  font-size: 40px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 80px;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  min-height: 300px;
  padding: 40px;
`;
const CardItem = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
`;
