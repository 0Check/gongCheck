import styled from "@emotion/styled";
import Text1 from "../atoms/text1";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Button } from "@material-ui/core";

export default function SearchDetailBtn(){
  return(
    <Wrapper>
       <Text1 fontSize="1.2rem" value="상세검색"/>
       <KeyboardDoubleArrowDownIcon />
    </Wrapper>
  )
}

export const Wrapper = styled(Button)`
 display: flex;
 flex-direction: row;
 align-items: center;
 height: 72px;
`;