import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { MAIN_COLOR } from "../../../commons/color";
import Text1 from "../atoms/text1";
import AuthContainer from "../organisms/authContainer";

export default function Menus() {
  const router = useRouter();

  return (
    <Wrapper>
      <FlexRowDiv>
        <Text1 fontSize="2rem" value="공첵" />
        <Button variant="outlined" onClick={() => router.push("/myservice")}>
          MyService
        </Button>
        <Button variant="outlined" onClick={() => router.push("/search")}>
          Search
        </Button>
      </FlexRowDiv>
      <AuthContainer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: 80px;
  background-color: ${MAIN_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
const FlexRowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & span:hover {
    cursor: pointer;
    color: white;
  }
`;
