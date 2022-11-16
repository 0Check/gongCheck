import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";
import Comment from "../molecules/comment";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
/**
 * Author : Sukyung Lee
 * FileName: commentContainer.tsx
 * Date: 2022-11-16 19:47:39
 * Description :
 */

interface ICommentContainerTypes {
  boardId?: string;
}

const CommentContainer = (props: ICommentContainerTypes) => {
  const [addCommentText, setAddCommentText] = useState("");

  const addCommentHandler = () => {
    if (addCommentText) return;
    console.log("commentContainer.tsx : ", addCommentText);
    setAddCommentText("");
  };

  return (
    <Wrapper>
      <CommentCount> 댓글 2 </CommentCount>
      <CommentBody>
        <Comment />
        <Comment />
        <FlexRowDiv>
          <Input
            onChange={(e: any) => {
              setAddCommentText(e.target.value);
            }}
            value={addCommentText}
          />
          <SendIconStyle onClick={addCommentHandler} />
        </FlexRowDiv>
      </CommentBody>
    </Wrapper>
  );
};
export default CommentContainer;
const Wrapper = styled.div`
  padding: 24px 12px 24px 12px;
  width: 100%;
`;
const CommentCount = styled.div`
  font-weight: 800;
  padding-bottom: 14px;
`;
const CommentBody = styled.div`
  display: flex;
  flex-flow: nowrap column;
  padding: 10px;
  gap: 20px;
`;
const FlexRowDiv = styled.div`
  display: flex;
  border: solid black 1px;
  align-items: center;
  border-radius: 10px;
  padding: 2px 2px;
`;
const SendIconStyle = styled(SendIcon)`
  padding: 10px;
  &:hover {
    cursor: pointer;
    /* background: #efefef; */
    background: #acc9f1;
    border-radius: 10px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background: none;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    background: #acc9f1;
    border-radius: 10px;
  }
`;
