import styled from "@emotion/styled";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
/**
 * Author : Sukyung Lee
 * FileName: comment.tsx
 * Date: 2022-11-16 20:21:38
 * Description :
 */
const defaultText =
  "이런 말풍선모양의 컴포넌트 어떤가요? 이런 말풍선모양의 컴포넌트 어떤가요? 이런 말풍선모양의 컴포넌트 어떤가요? 이런 말풍선모양의 컴포넌트 어떤가요? 이런 말풍선모양의 컴포넌트 어떤가요? 이런 말풍선모양의 컴포넌트 어떤가요? ";

const Comment = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editCommentText, setEditCommentText] = useState(defaultText);
  const [textareaHeight, setTextareaHeight] = useState(0);
  const textareaRef = useRef<any>();

  const closeEditCommentHandler = () => {
    console.log("comment.tsx : ", "댓글 수정 종료");
    console.log("comment.tsx : ", textareaRef.current?.scrollHeight);
    setEditCommentText(defaultText);
    setIsEdit(false);
  };

  const editCommentHandler = () => {
    console.log("comment.tsx : ", "댓글 수정");
  };

  const openEditCommentHandler = async () => {
    await setIsEdit(true);
    // await setTextareaHeight(textareaRef.current?.scrollHeight - 4);
    await setTextareaHeight(textareaRef.current?.scrollHeight);
  };

  const removeCommentHandler = () => {
    console.log("comment.tsx : ", "댓글 삭제");
  };

  return (
    <Wrapper>
      <CommentBalloon>
        <DisplayName> 코딩하는 공룡 </DisplayName>
        {isEdit ? (
          <textarea
            ref={textareaRef}
            className="textareaHeight"
            style={{
              resize: "none",
              width: "100%",
              height: textareaHeight + "px",
              border: "none",
              padding: "0px",
            }}
            value={editCommentText}
            onChange={(e: any) => setEditCommentText(e.target.value)}
          />
        ) : (
          <div>{defaultText}</div>
        )}
      </CommentBalloon>
      {isEdit ? (
        <CommentButtonGroup>
          <CloseIconStyle onClick={closeEditCommentHandler} />
          <SendIconStyle onClick={editCommentHandler} />
        </CommentButtonGroup>
      ) : (
        <CommentButtonGroup>
          <EditOutlinedIconStyle onClick={openEditCommentHandler} />
          <DeleteIconStyle onClick={removeCommentHandler} />
        </CommentButtonGroup>
      )}
    </Wrapper>
  );
};
export default Comment;
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;
const CommentBalloon = styled.div`
  background-color: #efefef;
  padding: 10px 30px 10px 10px;
  display: flex;
  flex-flow: nowrap column;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
  position: relative;

  &::before {
    --border-value: 24px;
    content: "";
    position: absolute;
    right: -24px;
    top: 16;
    width: 0;
    height: 0;
    border-bottom: var(--border-value) solid transparent;
    border-top: var(--border-value) solid #efefef;
    border-left: var(--border-value) solid transparent;
    border-right: var(--border-value) solid transparent;
  }
`;

const DisplayName = styled.span`
  font-weight: 800;
`;
const CommentButtonGroup = styled.div`
  display: flex;
  flex-flow: nowrap column;
  gap: 12px;
`;
const CloseIconStyle = styled(CloseIcon)`
  &:hover {
    cursor: pointer;
    background: #acc9f1;
    border-radius: 10px;
  }
`;
const EditOutlinedIconStyle = styled(EditOutlinedIcon)`
  &:hover {
    cursor: pointer;
    background: #acc9f1;
    border-radius: 10px;
  }
`;

const DeleteIconStyle = styled(DeleteIcon)`
  &:hover {
    cursor: pointer;
    background: #acc9f1;
    border-radius: 10px;
  }
`;
const SendIconStyle = styled(SendIcon)`
  &:hover {
    cursor: pointer;
    background: #acc9f1;
    border-radius: 10px;
  }
`;
