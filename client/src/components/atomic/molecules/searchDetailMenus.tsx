import styled from "@emotion/styled";
import { age, gender, pay } from "../../../commons/detailSearchMenuList";
import SimpleAccordion from "../atoms/acordion1";
import RadioButtonsGroup from "./radioGroup";

export default function DetailMenus(){
 
  return(
    <Wrapper>
      <AccordionWrapper>
        < SimpleAccordion width="30%" height="150px" border="solid" title="연령"  menus={<RadioButtonsGroup values={age}/> } />
        < SimpleAccordion width="30%" height="150px" border="solid" title="성별"  menus={  <RadioButtonsGroup values={gender}/>} />
        < SimpleAccordion width="30%" height="150px" border="solid" title="소득분위" menus={<RadioButtonsGroup values={pay}/>} />
      </AccordionWrapper>
      <AccordionWrapper>
        < SimpleAccordion width="45%" height="150px" border="solid" title="개인특성(중복선택가능)" menus={<div>sfd</div>}/>
        < SimpleAccordion width="45%" height="150px" border="solid" title="가구특성(중복선택가능)" menus={<div>sfd</div>} />
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