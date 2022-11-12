import styled from "@emotion/styled";

export default function myService() {
  return (
    <>
      <div>나만의 공공서비스</div>
      <SearchBar />
      <TitleDevideLine />
      <Page>
        <LeftSide>
          <LeftCard>
            <CardTitle>이러한 공공서비스가 생겼으면 좋겠습니다.</CardTitle>
            <CardBox>
              <CardSubTitle>작성자</CardSubTitle>
              <CardContext>내용</CardContext>
            </CardBox>
            <CardBox>
              <CardSubTitle>지원대상</CardSubTitle>
              <CardContext>내용</CardContext>
            </CardBox>
            <CardBox>
              <CardSubTitle>지원내용</CardSubTitle>
              <CardContext>내용</CardContext>
            </CardBox>
          </LeftCard>
        </LeftSide>
        <CardDivideLine />
        <RightSide>
          <RightCard>
            <CardTitle>이러한 공공서비스가 생겼으면 좋겠습니다.</CardTitle>
            <CardBox>
              <CardSubTitle>작성자</CardSubTitle>
              <CardContext>내용</CardContext>
            </CardBox>
            <CardBox>
              <CardSubTitle>지원대상</CardSubTitle>
              <CardContext>내용</CardContext>
            </CardBox>
            <CardBox>
              <CardSubTitle>지원내용</CardSubTitle>
              <CardContext>
                공공서비스 지원 내용을 입력해주시면 됩니다.
              </CardContext>
            </CardBox>
          </RightCard>
        </RightSide>
      </Page>
    </>
  );
}

export const SearchBar = styled.input`
  width: 85%;
  font-size: 2rem;
  border-radius: 15px;
  border: 1px solid #aaaaaa;
  margin: 50px 0;
`;

export const TitleDevideLine = styled.div`
  border: 1px solid black;
  margin: 0 0 50px 0;
`;

export const CardDivideLine = styled.div`
  height: 100vh;
  border: 1px solid black;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 60em;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export const RightSide = styled.div`
  width: 40em;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export const LeftCard = styled.div`
  width: 500px;
  height: 300px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
`;

export const RightCard = styled.div`
  width: 500px;
  height: 600px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 15px;
`;

export const CardTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const CardSubTitle = styled.div`
  width: 5em;
  font-size: 1rem;
  font-weight: 600;
`;

export const CardContext = styled.div`
  font-size: 1rem;
`;
