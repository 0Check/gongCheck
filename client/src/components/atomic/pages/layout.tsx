import styled from "@emotion/styled";
import { Container } from "@material-ui/core";
import { ReactNode } from "react";
import { MAIN_COLOR } from "../../../commons/color";
import Menus from "../molecules/menus";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${MAIN_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled(Container)`
  
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps ){
  return(
    <Wrapper>
      <Main>
        <Menus />
      </Main>
    </Wrapper>
  )
}