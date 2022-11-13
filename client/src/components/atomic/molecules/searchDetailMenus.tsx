import styled from "@emotion/styled";
import SimpleAccordion from "../atoms/acordion1";

export default function DetailMenus(){
  return(
    <Wrapper>
      <AccordionWrapper>
        < SimpleAccordion width="30%" title="연령" menus={<div>sfd</div>} elevation="0"/>
        < SimpleAccordion width="30%" title="성별" menus={<div>sfd</div>} elevation="0"/>
        < SimpleAccordion width="30%" title="소득분위" menus={<div>sfd</div>} elevation="0"/>
      </AccordionWrapper>
      <AccordionWrapper>
        < SimpleAccordion width="45%" title="연령" menus={<div>sfd</div>} elevation="0"/>
        < SimpleAccordion width="45%" title="성별" menus={<div>sfd</div>} elevation="0"/>
      </AccordionWrapper>
    </Wrapper>
 
  )
}

export const AccordionWrapper = styled.div`

 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin: 20px 0px;
`;

export const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;