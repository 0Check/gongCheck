import styled from "@emotion/styled";
import { BOX_COLOR } from "../../../commons/color";
import SimpleAccordion from "../atoms/acordion1";
import IconBtn from "../atoms/button1";
import Input1 from "../atoms/input1";

import DetailMenus from "../molecules/searchDetailMenus";





export default function SearchNormal(){
  return(
    <Wrapper>
      <SearchWrapper>
        <Input1 />
        <IconBtn />
      </SearchWrapper>
      < SimpleAccordion width="100%" height="auto" border="none" title="상세검색" menus={<DetailMenus />} />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
 width: 100%;
 margin: 50px 0;
`;
export const SearchWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
 width: 100%;
`;