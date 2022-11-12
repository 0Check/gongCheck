import styled from "@emotion/styled";
import Menus from "../molecules/menus";

export const Wrapper = styled.div`
  width: 100%;
  background-color: orange;
`;

export default function NavBar(){
  return(
    <Wrapper>
      <Menus />
    </Wrapper>
  )
}
