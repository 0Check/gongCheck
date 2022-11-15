import styled from "@emotion/styled";
import { MAIN_COLOR } from "../../../commons/color";
import Text1 from "../atoms/text1";
import AuthContainer from "../organisms/authContainer";

export default function Menus() {
  return (
    <Wrapper>
      <Text1 fontSize="2rem" value="공첵" />
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
