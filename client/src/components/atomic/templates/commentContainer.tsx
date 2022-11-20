import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";
import Comment from "../molecules/comment";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, KeyboardEvent } from "react";
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
} from "firebase/firestore";
import { firebaseDbService } from "../../../config/firebase";
import { v4 as uuidv4 } from "uuid";
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
  const [inputAddComment, setInputAddComment] = useState("");
  const [commentListDocs, setCommentListDocs] = useState<any>();

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addCommentHandler();
    }
  };

  // [Create] 댓글 추가하기
  const addCommentHandler = async () => {
    if (inputAddComment === "") return;
    const addBoard = await addDoc(collection(firebaseDbService, "comment"), {
      boardId: "아직 게시글ID가 없음",
      writer: store.getState().authStore.displayName,
      content: inputAddComment,
      createdAt: serverTimestamp(),
    })
      .then((result) => {
        setInputAddComment("");
        getCommentList();
      })
      .catch((err) => {
        console.log("commentContainer.tsx : ", err);
      });
  };

  // [Read] 댓글 리스트 조회하기
  const getCommentList = async () => {
    const getCommentsQuery = query(
      collection(firebaseDbService, "comment"),
      where("boardId", "==", "아직 게시글ID가 없음")
    );

    await getDocs(getCommentsQuery)
      .then((result) => {
        setCommentListDocs(
          result.docs.map((i) => {
            return { uid: i.id, ...i.data() };
          })
        );
      })
      .catch((err) => {
        console.log("commentContainer.tsx : ", "댓글 리스트 조회 중 에러 발생");
      });
  };

  // [Update] 댓글 수정하기
  const editCommentHandler = async (uid: string, editCommentText: string) => {
    const editCommentRef = doc(firebaseDbService, "comment", uid);
    const getEditCommentRef = await getDoc(editCommentRef);
    const getEditCommentData = await getEditCommentRef.data();
    await updateDoc(editCommentRef, {
      ...getEditCommentData,
      content: editCommentText,
    })
      .then((result) => {
        setCommentListDocs(
          commentListDocs.map((i: any) =>
            i.uid !== uid
              ? i
              : {
                  ...i,
                  content: editCommentText,
                }
          )
        );
      })
      .catch((err) => {});
  };

  // [Delete] 댓글 삭제하기
  const removeCommentHandler = async (uid: string) => {
    await deleteDoc(doc(firebaseDbService, "comment", uid))
      .then((result) => {
        alert("댓글이 삭제되었습니다.");
        setCommentListDocs(
          commentListDocs.filter((el: any) => el.uid !== uid).map((i: any) => i)
        );
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <Wrapper>
      <CommentCount> 댓글 {commentListDocs?.length} </CommentCount>
      <CommentBody>
        {commentListDocs?.map((i: any) => (
          <Comment
            key={uuidv4()}
            data={i}
            removeCommentHandler={removeCommentHandler}
            editCommentHandler={editCommentHandler}
          />
        ))}
      </CommentBody>
      <FlexColumnDiv>
        <span> 닉네임 : {store.getState().authStore.displayName} </span>
        <FlexRowDiv>
          <Input
            onChange={(e: any) => {
              setInputAddComment(e.target.value);
            }}
            value={inputAddComment}
            onKeyPress={onKeyPressHandler}
          />
          <SendIconStyle onClick={addCommentHandler} />
        </FlexRowDiv>
      </FlexColumnDiv>
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
