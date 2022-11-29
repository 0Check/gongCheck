import styled from "@emotion/styled";
import { async } from "@firebase/util";
import React, { useCallback, useState } from "react";
import { createBoard } from "../../src/api/myBoardApiService";

export default function CreateBoard() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [target, setTarget] = useState("");

  const changeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const changeContents = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContents(e.target.value);
    },
    []
  );

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    createBoard(title, target, contents).then((res) => {
      alert("글이 작성이 되었습니다.");
    });
  };

  return (
    <>
      <Head>공공서비스 제안하기</Head>
      <Body>
        <div>공공서비스 이름</div>
        <Title
          placeholder="공공서비스의 이름을 정해주세요"
          onChange={changeTitle}
        />
        <div>공공서비스 지원대상</div>
        <Title
          placeholder="공공서비스의 지원대상을 입력해주세요"
          onChange={(e) => setTarget(e.target.value)}
        />
        <div>공공서비스 내용</div>
        <Content
          placeholder="공공서비스의 상세한 내용을 입력해주세요"
          onChange={changeContents}
        />
      </Body>
      <button onClick={onClickSubmit}>작성하기</button>
    </>
  );
}

export const Head = styled.div`
  font-size: 3rem;
  margin: 20px 0;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;
export const Title = styled.input`
  margin: 10px 0 30px 0;
  ::placeholder {
    opacity: 0.5;
  }
`;
export const Content = styled.textarea`
  min-height: 200px;
  margin: 10px 0 30px 0;
  ::placeholder {
    opacity: 0.5;
  }
`;
