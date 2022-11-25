import styled from "@emotion/styled";
import { async } from "@firebase/util";
import React, { useCallback, useState } from "react";
import { createBoard } from "../../src/api/createBoard";

export default function CreateBoard() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const changeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const changeContents = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContents(e.target.value);
    },
    []
  );

  const onClickSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      createBoard(title, contents);
    },
    [title, contents]
  );
  return (
    <>
      <Head>공공서비스 제안하기</Head>
      <Body>
        <div>공공서비스 이름</div>
        <Title
          placeholder="공공서비스의 이름을 정해주세요"
          onChange={changeTitle}
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
