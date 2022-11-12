import styled from "@emotion/styled";
import { IconButton } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';




export default function IconBtn(){
  
  return(
  
    <Button aria-label="search">
      <SearchIcon fontSize="large" />
    </Button>

  )
}
export const Button = styled(IconButton)`
  width: 72px;
  height: 72px;

`




