import React from "react";
import styled from "styled-components";

export const GameCard = () => {
  return (
    <Container>
      <CardHeader>Ketçup</CardHeader>
      <CardBody>
        <CardItem>Katof fri</CardItem>
        <CardItem>Mayonez</CardItem>
        <CardItem>Souz</CardItem>
        <CardItem>Pomidor tomatı</CardItem>
        <CardItem>Acı</CardItem>
      </CardBody>
    </Container>
  );
};
const Container = styled.div`
  width: 300px;
  margin-top: 20px;
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
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  min-height: 300px;
  padding: 40px;
`;
const CardItem = styled.div`
  font-size: 30px;
`;
