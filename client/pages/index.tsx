import styled from "@emotion/styled";
import Test from "../src/test/Test";
import Test1 from "../src/test/Test1";

export default function Home() {
  return (
    <Container>
      <Test />
      <Test1 />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
