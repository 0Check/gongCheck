import styled from "@emotion/styled";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { dateFormat4y2m2d2h2m } from "../../../commons/function/dateFormat";
/**
 * Author : Sukyung Lee
 * FileName: comment.tsx
 * Date: 2022-11-16 20:21:38
 * Description :
 */

interface ICommentProps {
  data: {
    uid: string;
    writer: string;
    createdAt: {
      seconds: number;
      nanoseconds: number;
    };
    boardId: string;
    content: string;
  };
  removeCommentHandler: (uid: string) => void;
  editCommentHandler: (uid: string, editCommentText: string) => void;
}

const Comment = (props: ICommentProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editCommentText, setEditCommentText] = useState(props.data.content);
  const [textareaHeight, setTextareaHeight] = useState(0);
  const textareaRef = useRef<any>();

  const closeEditCommentHandler = () => {
    setEditCommentText(props.data.content);
    setIsEdit(false);
  };

  const openEditCommentHandler = async () => {
    await setIsEdit(true);
    // padding값이 변할 경우 "scrollHeight-패딩간격"을 해주어야 한다.
    await setTextareaHeight(textareaRef.current?.scrollHeight);
  };

  //
  const editCommentHandler = () => {
    props.editCommentHandler(props.data.uid, editCommentText);
    setIsEdit(false);
    alert("댓글이 수정되었습니다.");
  };

  return (
    <Wrapper>
      <CommentBalloon>
        <DisplayName>
          <span> {props.data.writer} </span>
          <span>
            {dateFormat4y2m2d2h2m(props.data?.createdAt?.seconds * 1000)}{" "}
          </span>
        </DisplayName>
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
          <div>{props.data.content}</div>
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
          <DeleteIconStyle
            onClick={() => props.removeCommentHandler(props.data.uid)}
          />
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
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-flow: nowrap column;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
  position: relative;

  &::before {
    --border-value: 20px;
    content: "";
    position: absolute;
    right: -20px;
    top: 16;
    width: 0;
    height: 0;
    border-bottom: var(--border-value) solid transparent;
    border-top: var(--border-value) solid #efefef;
    border-left: var(--border-value) solid transparent;
    border-right: var(--border-value) solid transparent;
  }
`;

const DisplayName = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid #aeaeae 1px;
  padding-bottom: 2px;

  & > span:nth-of-type(1) {
    font-weight: 800;
  }
  & > span:nth-of-type(2) {
    font-size: 12px;
    z-index: 10;
  }
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
