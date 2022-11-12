import styled from "@emotion/styled";
import { MAIN_COLOR } from "../../../commons/color";
import Text1 from "../atoms/text1";

export default function Menus(){
  return(
    <Wrapper>
      <Text1 fontSize="2rem" value="공첵" />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
 width: 100%;
  height: 80px;
  background-color: ${MAIN_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
