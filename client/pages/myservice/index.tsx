import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import React, { useCallback, useEffect, useState } from "react";
import CommentContainer from "../../src/components/atomic/templates/commentContainer";
import ChartExample from "../../src/components/atomic/organisms/chart";
import { useRouter } from "next/dist/client/router";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { getBoardList, voteBoard } from "../../src/api/myBoardApiService";
import { v4 as uuidv4 } from "uuid";

// const data = [
//   { name: "1", title: "test1", who: "children1", content: "content1" },
//   { name: "2", title: "test2", who: "children2", content: "content2" },
//   { name: "3", title: "test3", who: "children3", content: "content3" },
//   { name: "4", title: "test4", who: "children4", content: "content4" },
//   { name: "5", title: "test5", who: "children5", content: "content5" },
//   { name: "6", title: "test6", who: "children6", content: "content6" },
// ];

export default function MyService() {
  const router = useRouter();
  const [rightSide, setRightSide] = useState("");
  const [content, setContent] = useState("content");
  const [data, setData] = useState<any[]>();

  const onClickCard = useCallback((e) => {
    console.log("index.tsx : ", e.currentTarget.id);
    setRightSide(e.currentTarget.id);
    setContent("content");
  }, []);

  const changeContent = useCallback((e) => {
    setContent(e.target.id);
  }, []);

  const onClickWrite = (e: React.MouseEvent<HTMLDivElement>) => {
    router.push("/create");
  };

  const onClickVoteTrue = (e: React.MouseEvent<HTMLDivElement>) => {
    voteBoard(e.target.id, true)
  }

  const onClickVoteFalse = (e: React.MouseEvent<HTMLDivElement>) => {
    voteBoard(e.target.id, false)
  }

  useEffect(() => {
    getBoardList(1).then((res) => {
      console.log("index.tsx : ", res);
      setData(res);
    });
  }, []);

  return (
    <>
      <SearchBox>
        <SearchBar />
        <SearchIcon
          style={{ position: "relative", top: "60px", right: "40px" }}
        />
        <WriteButton onClick={onClickWrite}>
          <CreateIcon />
          글쓰기
        </WriteButton>
      </SearchBox>
      <TitleDevideLine />
      <Page>
        <LeftSide>
          {data?.map((el) => (
            <LeftCard key={uuidv4()} onClick={onClickCard} id={el.id}>
              <CardTitle> {el.title}</CardTitle>
              <CardBox>
                <CardSubTitle> 작성자 :</CardSubTitle>
                <CardContext>{el.writer}</CardContext>
              </CardBox>
              <CardBox>
                <CardSubTitle> 지원 대상 :</CardSubTitle>
                <CardContext>{el.target}</CardContext>
              </CardBox>
              <CardBox>
                <CardSubTitle> 지원 내용 :</CardSubTitle>
                <CardContext>{el.contents}</CardContext>
              </CardBox>
            </LeftCard>
          ))}
        </LeftSide>
        <CardDivideLine />
        <RightSide>
          <div>
            <GraphOption id="content" onClick={changeContent}>
              내용
            </GraphOption>
            <GraphOption id="graph" onClick={changeContent}>
              투표현황
            </GraphOption>
          </div>
          {data?.filter((el: any) => el.id === rightSide)
            .map((el: any) => (
              content === "content" ? (
                <RightCard key={uuidv4()}>
                  <CardTitle>{el.title}</CardTitle>
                  <CardBox>
                    <CardSubTitle>제목</CardSubTitle>
                    <CardContext>{el.title}</CardContext>
                  </CardBox>
                  <CardBox>
                    <CardSubTitle>지원대상</CardSubTitle>
                    <CardContext>{el.target}</CardContext>
                  </CardBox>
                  <CardBox>
                    <CardSubTitle>지원내용</CardSubTitle>
                    <CardContext>{el.contents}</CardContext>
                  </CardBox>
                  <CommentContainer boardId={el.id} />
                </RightCard>
              ) : (
                <>
                  <ChartExample />
                  <VoteTitle>이 의견에 대해서 어떻게 생각하세요?</VoteTitle>
                  <IconBox>
                    <div
                      id={el.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#A1D0F6",
                        width: "110px",
                        height: "60px",
                        borderRadius: "10px",
                        cursor: "pointer"
                      }}
                      onClick={onClickVoteTrue}
                    >
                      좋아요
                      <ThumbUpIcon style={{ marginTop: "10px" }} />
                    </div>
                    <div
                      id={el.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F6B6C1",
                        width: "110px",
                        height: "60px",
                        borderRadius: "10px",
                        cursor: "pointer"
                      }}
                      onClick={onClickVoteFalse}
                    >
                      별로인거같아요
                      <ThumbDownIcon style={{ marginTop: "10px" }} />
                    </div>
                  </IconBox>
                </>
              )
            ))
          }
        </RightSide>
      </Page>
    </>
  );
}

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.input`
  width: 85%;
  font-size: 2rem;
  border-radius: 15px;
  border: 1px solid #aaaaaa;
  margin: 50px 0;
`;

export const WriteButton = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleDevideLine = styled.div`
  border: 1px solid black;
  margin: 0 0 50px 0;
`;

export const CardDivideLine = styled.div`
  height: 80vh;
  border: 1px solid black;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background-color: #4167ee;
  }
`;

export const RightSide = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

export const LeftCard = styled.div`
  height: 400px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const RightCard = styled.div`
  width: 500px;
  min-height: 600px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 15px;
  margin-top: 20px;
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

export const GraphOption = styled.button`
  width: 10em;
`;

export const IconBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const VoteTitle = styled.div`
  font-size: 1.5rem;
  padding: 10px;
`;
