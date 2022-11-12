import styled from "@emotion/styled";
import { LINE_COLOR } from "../../../commons/color";

export default function DivideLine(props: any){
  return(
    <Line bgColor={props.bgColor} />
  )
}

export const Line = styled.div<{bgColor: string}>`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.bgColor};

`;