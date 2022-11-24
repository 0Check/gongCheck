import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { resolve } from "path";
import { firebaseDbService } from "../config/firebase";
import { store } from "../redux/store";

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

// [Create] 댓글 추가하기
export const addComment = async (
  commentInputValue: string,
  commentList: Array<commentListType> | undefined
) => {
  if (commentInputValue === "") return;
  return addDoc(collection(firebaseDbService, "comment"), {
    boardId: "아직 게시글ID가 없음",
    writer: store.getState().authStore.displayName,
    content: commentInputValue,
    createdAt: serverTimestamp(),
  })
    .then(async (result) => {
      return Promise.resolve("Success");
    })
    .catch(async (err) => {
      return Promise.reject("Fail");
    });
};

// [Read] 댓글 리스트 조회하기
export const getCommentList = async () => {
  const q = query(
    collection(firebaseDbService, "comment"),
    orderBy("createdAt", "desc"),
    where("boardId", "==", "아직 게시글ID가 없음")
  );
  return await getDocs(q)
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject("Fail");
    });
};

// [Update] 댓글 수정하기
export const updateComment = async (uid: string, editCommentText: string) => {
  const editCommentRef = doc(firebaseDbService, "comment", uid);
  const getEditCommentRef = await getDoc(editCommentRef);
  const getEditCommentData = await getEditCommentRef.data();

  return updateDoc(editCommentRef, {
    ...getEditCommentData,
    content: editCommentText,
  })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject("Fail");
    });
};

// [Delete] 댓글 삭제하기
export const deleteComment = async (uid: string) => {
  deleteDoc(doc(firebaseDbService, "comment", uid))
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject("Fail");
    });
};
