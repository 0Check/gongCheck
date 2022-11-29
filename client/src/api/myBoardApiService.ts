import { firebaseApp } from "../config/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  orderBy,
  limit,
  startAt,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { store } from "../redux/store";

const db = getFirestore(firebaseApp);

// [Create] 게시글 생성하기
export const createBoard = async (
  title: string,
  target: string,
  contents: string
) => {
  let today = new Date();
  let user = store.getState().authStore.uid;

  if (user !== "") {
    const docRef = await addDoc(collection(db, "board"), {
      title: title,
      target: target,
      writer: store.getState().authStore.displayName,
      contents: contents,
      createdAt: today.toLocaleString(),
      agreeGender: [0, 0],
      oppositeGender: [0, 0],
      agreeAge: [0, 0, 0, 0, 0, 0],
      oppositeAge: [0, 0, 0, 0, 0, 0],
      user: store.getState().authStore.uid,
      votedUser: [],
    })
      .then(async (result) => {
        return Promise.resolve("Success");
      })
      .catch(async (err) => {
        return Promise.reject("Fail");
      });
  } else {
    alert("로그인이 필요합니다");
  }
};

// [Read] 게시글 리스트 불러오기
export const getBoardList = async (pageNum: number) => {
  let arr: any[] = [];
  const listDB = query(
    collection(db, "board"),
    orderBy("createdAt"),
    startAt(pageNum),
    limit(12)
  );

  return await getDocs(listDB)
    .then((result) => {
      return Promise.resolve(
        result.docs.map((el) => {
          const temp = el.data();
          temp["id"] = el.id;
          return temp;
        })
      );
    })
    .catch((err) => {
      return Promise.reject("Fail");
    });
};

// [Read] 게시글 디테일 불러오기
export const getBoardDetail = async (boardID: string) => {
  const docRef = doc(db, "board", boardID);
  return await getDoc(docRef)
    .then((result) => {
      return Promise.resolve(result.data());
    })
    .catch((err) => {
      return Promise.reject("Fail");
    });
};

// [Update] 게시글 수정하기
export const updateBoard = async (boardID: string, contents: string) => {
  const docRef = doc(db, "board", boardID);
  const docSnap = await getDoc(docRef);
  let user = store.getState().authStore.uid;
  let data: any = docSnap.data();

  if (user === data.user) {
    await updateDoc(docRef, {
      contents: contents,
    })
      .then((result) => {
        return Promise.resolve(result);
      })
      .catch((err) => {
        return Promise.reject("Fail");
      });
  } else {
    alert("수정 권한이 없습니다.");
  }
};

// [Delete] 게시글 삭제하기
export const deleteBoard = async (boardID: string) => {
  const docRef = doc(db, "board", boardID);
  const docSnap = await getDoc(docRef);
  let user = store.getState().authStore.uid;
  let data: any = docSnap.data();

  if (user === data.user) {
    await deleteDoc(docRef)
      .then((result) => {
        return Promise.resolve(result);
      })
      .catch((err) => {
        return Promise.reject("Fail");
      });
  } else {
    alert("삭제 권한이 없습니다.");
  }
};

// [Vote] 게시글 투표하기
export const voteBoard = async (boardID: string, vote: boolean) => {
  const docRef = doc(db, "board", boardID);
  const docSnap = await getDoc(docRef);
  let user = store.getState().authStore.uid;
  let gender = store.getState().authStore.gender;

  let birth = store.getState().authStore.birth;
  const today = new Date();
  const birthDate = new Date(
    birth.slice(0, 4),
    birth.slice(4, 6),
    birth.slice(6, 8)
  );
  let age = Math.floor(
    (today.getFullYear() - birthDate.getFullYear() + 1) / 10
  );

  let data: any = docSnap.data();
  let votedUser = data.votedUser;
  let agreeGender = data.agreeGender;
  let oppositeGender = data.oppositeGender;
  let agreeAge = data.agreeAge;
  let oppositeAge = data.oppositeAge;

  if (!votedUser.includes(user)) {
    votedUser.push(user);

    if (vote) {
      if (gender === "man") {
        agreeGender[0]++;
      } else {
        agreeGender[1]++;
      }

      agreeAge[age - 1]++;

      await updateDoc(docRef, {
        agreeGender: agreeGender,
        agreeAge: agreeAge,
        votedUser: votedUser,
      });
    } else {
      if (gender === "man") {
        oppositeGender[0]++;
      } else {
        oppositeGender[1]++;
      }

      oppositeAge[age - 1]++;

      await updateDoc(docRef, {
        oppositeGender: oppositeGender,
        oppositeAge: oppositeAge,
        votedUser: votedUser,
      });
    }
    alert("투표를 진행했습니다.");
  } else {
    alert("이미 투표를 했습니다.");
  }
};
