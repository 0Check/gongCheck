import styled from "@emotion/styled";
import { BOX_COLOR } from "../../../commons/color";
import IconBtn from "../atoms/button1";
import Input1 from "../atoms/input1";
import SearchDetailBtn from "../molecules/searchDetailBtn";




export default function SearchDetail(){
  return(
    <Wrapper>
      <Input1 />
      <IconBtn />
      <SearchDetailBtn/>
     
    </Wrapper>
  )
}

export const Wrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 background-color: ${BOX_COLOR};
 width: 100%;
 height: 200px;
 
`;