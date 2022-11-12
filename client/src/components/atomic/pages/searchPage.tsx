import { LINE_COLOR } from "../../../commons/color";
import DivideLine from "../atoms/divideLine";
import Card from "../molecules/card";
import SearchNormal from "../organisms/searchNormal";

export default function SearchPage(){
  return(
    <>
      <SearchNormal />
      <DivideLine bgColor={LINE_COLOR} />
      <Card />
    
    </>
  )
}