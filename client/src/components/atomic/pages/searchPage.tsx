import { useEffect, useState } from "react";
import { LINE_COLOR } from "../../../commons/color";
import DivideLine from "../atoms/divideLine";
import styled from "@emotion/styled";
import { onChangeEventHandler } from "../../../commons/function/event/inputEvent";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { getServiceList } from "../../../api/publicServiceApiService";
import { DocumentData } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import Card from "../molecules/card";

export default function SearchPage() {
  const [serviceList, setServiceList] = useState<DocumentData>();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const submitSearchPublicService = () => {
    console.log("searchNormal.tsx : ", "test");
    getServiceList(1, searchKeyword).then((res) => {
      console.log("searchPage.tsx : ", res);
      setServiceList(res);
    });
  };
  const submitSearchPublicService1 = () => {
    console.log("searchNormal.tsx : ", "test");
    getServiceList(3, searchKeyword).then((res) => {
      console.log("searchPage.tsx : ", res);
      setServiceList(res);
    });
  };

  useEffect(() => {
    getServiceList(1, searchKeyword).then((res) => {
      setServiceList(res);
    });
  }, []);

  return (
    <>
      <Wrapper>
        <SearchWrapper>
          <Input onChange={onChangeEventHandler(setSearchKeyword)} />
          <Button onClick={submitSearchPublicService}>
            <SearchIcon fontSize="large" />
          </Button>
          <Button onClick={submitSearchPublicService1}>
            <SearchIcon fontSize="large" />
          </Button>
        </SearchWrapper>
      </Wrapper>
      <DivideLine bgColor={LINE_COLOR} />
      <Cards>
        {serviceList?.map((el: any) => (
          <Card key={uuidv4()} data={el} />
        ))}
      </Cards>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;
const Input = styled.input`
  width: 80%;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  padding-left: 20px;
`;
const Button = styled(IconButton)`
  width: 72px;
  height: 72px;
`;
const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 50px;
  @media (max-width: 412px) {
    /* flex-direction: column; */
  }
`;
