import styled from "@emotion/styled";
import { Container } from "@material-ui/core";
import { ReactNode } from "react";
import Menus from "../molecules/menus";

export const Wrapper = styled.div`
`;

export const Main = styled(Container)`

`;


interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps ){
  return(
     <Wrapper>
      <Menus />
      <Main>
        <div>{props.children}</div>
      </Main>
    </Wrapper>  
  )
}