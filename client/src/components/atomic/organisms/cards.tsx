import styled from "@emotion/styled";
import Card from "../molecules/card";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  @media (max-width: 412px) {
    flex-direction: column;
  }
`;

export default function Cards() {
  return (
    <Wrapper>
      {/* <Card />
     <Card />
     <Card />
     <Card /> */}
    </Wrapper>
  );
}
