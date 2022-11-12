import { LINE_COLOR } from "../../../commons/color";
import DivideLine from "../atoms/divideLine";

import Cards from "../organisms/cards";
import SearchNormal from "../organisms/searchNormal";

export default function SearchPage(){
  return(
    <>
      <SearchNormal />
      <DivideLine bgColor={LINE_COLOR} />
      <Cards />
    
    </>
  )
}