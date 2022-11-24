import styled from "@emotion/styled";
import Comment from "../molecules/comment";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, KeyboardEvent, SetStateAction } from "react";
import { store } from "../../../redux/store";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { firebaseDbService } from "../../../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/reducers";
import {
  addComment,
  deleteComment,
  getCommentList,
  updateComment,
} from "../../../api/commentApiService";
import { onKeyPressHandler } from "../../../commons/function/event/keyboardEvent";

/**
 * Author : Sukyung Lee
 * FileName: commentContainer.tsx
 * Date: 2022-11-16 19:47:39
 * Description :
 */

interface ICommentContainerTypes {
  boardId?: string;
}

type commentListType = {
  uid?: String;
  boardId?: String;
  content?: String;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
  writer?: String;
};

const CommentContainer = (props: ICommentContainerTypes) => {
  const [commentInputValue, setCommentInputValue] = useState("");
  const [commentList, setCommentList] = useState<commentListType[]>();
  const authStore = useSelector((state: RootState) => state.authStore);

  // [Create] 댓글 추가하기
  const addCommentHandler = async (
    commentInputValue: string,
    commentList: Array<commentListType> | undefined
  ) => {
    if (commentInputValue !== undefined) {
      addComment(commentInputValue, commentList)
        .then((result) => {
          setCommentInputValue("");
          getCommentListHandler();
        })
        .catch((err) => {
          alert("댓글 추가하기 중 에러 발생");
        });
    }
  };

  // [Read] 댓글 리스트 조회하기
  const getCommentListHandler = async () => {
    getCommentList()
      .then(async (result) => {
        await setCommentList(
          result.docs.map((i) => {
            return { uid: i.id, ...i.data() };
          })
        );
      })
      .catch((err) => {
        alert("댓글 리스트 조회 중 에러 발생");
      });
  };

  // [Update] 댓글 수정하기
  const updateCommentHandler = async (
    uid: string,
    updateCommentText: string
  ) => {
    await updateComment(uid, updateCommentText)
      .then((result) => {
        setCommentList(
          commentList?.map((i: any) =>
            i.uid !== uid
              ? i
              : {
                  ...i,
                  content: updateCommentText,
                }
          )
        );
      })
      .catch((err) => {
        alert("댓글 수정 중 에러 발생");
      });
  };

  // [Delete] 댓글 삭제하기
  const removeCommentHandler = async (uid: string) => {
    deleteComment(uid)
      .then((result) => {
        alert("댓글이 삭제되었습니다.");
        setCommentList(
          commentList?.filter((el: any) => el.uid !== uid).map((i: any) => i)
        );
      })
      .catch((err) => {
        alert("댓글 삭제 중 에러 발생");
      });
  };

  useEffect(() => {
    getCommentListHandler();
  }, []);

  return (
    <Wrapper>
      <CommentCount> 댓글 {commentList?.length} </CommentCount>
      <CommentBody>
        {commentList?.map((i: any) => (
          <Comment
            key={uuidv4()}
            data={i}
            removeCommentHandler={removeCommentHandler}
            updateCommentHandler={updateCommentHandler}
          />
        ))}
      </CommentBody>
      {authStore.displayName && (
        <FlexColumnDiv>
          <span> 닉네임 : {authStore.displayName} </span>
          <FlexRowDiv>
            <Input
              onChange={(e: any) => {
                setCommentInputValue(e.target.value);
              }}
              value={commentInputValue}
              onKeyPress={onKeyPressHandler(() =>
                addCommentHandler(commentInputValue, commentList)
              )}
            />
            <SendIconStyle
              onClick={() => addCommentHandler(commentInputValue, commentList)}
            />
          </FlexRowDiv>
        </FlexColumnDiv>
      )}
    </Wrapper>
  );
};

export default CommentContainer;
const Wrapper = styled.div`
  padding: 24px 12px 12px 12px;
  width: 100%;
`;
const CommentCount = styled.div`
  font-weight: 800;
  padding-bottom: 14px;
`;
const CommentBody = styled.div`
  display: flex;
  flex-flow: nowrap column;
  height: 420px;
  padding: 10px;
  gap: 20px;
  overflow: scroll;
  outline: solid #aeaeae 1px;
  border-radius: 10px;
`;
const FlexColumnDiv = styled.div`
  display: flex;
  flex-flow: nowrap column;
  gap: 4px;
  padding: 20px 0px 4px 0px;
  & > span {
    font-weight: 800;
    font-size: 16px;
  }
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
