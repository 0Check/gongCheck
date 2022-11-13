import styled from "@emotion/styled";
import Text1 from "../atoms/text1";

import DivideLine from "../atoms/divideLine";
import { BORDER_COLOR } from "../../../commons/color";


export default function Card(){
  return(
    <Wrapper>
       <Text1 fontSize="1.5rem" value="서비스명"/>
       <Text1 fontSize="1rem" value="설명"/>
       <DivideLine  bgColor={BORDER_COLOR} />
       <TextWrapper>
        <Text1 fontSize="1rem" value="신청기간"/>
        <Text1 fontSize="1rem" value="ㅇㅇㅇㅇㅇㅇ"/>
       </TextWrapper>
       <TextWrapper>
        <Text1 fontSize="1rem" value="접수기관"/>
        <Text1 fontSize="1rem" value="ㅌㅌㅌㅌ"/>
       </TextWrapper>
       <TextWrapper>
        <Text1 fontSize="1rem" value="지원형태"/>
        <Text1 fontSize="1rem" value="ㅇㅇㅇㅇㅇㅇ"/>
       </TextWrapper>
       <TextWrapper>
        <Text1 fontSize="1rem" value="신청방법"/>
        <Text1 fontSize="1rem" value="ㅇㅇㅇㅇㅇㅇ"/>
       </TextWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 padding: 0px 20px;
 width: 25%;
 height: 300px;
 border: 1px solid ${BORDER_COLOR};
 margin-bottom: 50px;
 cursor: pointer;
 @media (max-width: 412px) {
  width: 100%;
  padding: 0px 0px;
  }
 
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`;