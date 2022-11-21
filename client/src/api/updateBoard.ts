import { firebaseApp } from "../config/firebase";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { store } from "../redux/store";

const db = getFirestore(firebaseApp);

export const updateBoard = async (boardID: string, contents: string) => {
  const docRef = doc(db, "board", boardID);
  const docSnap = await getDoc(docRef);
  let user = store.getState().authStore.uid;
  let data: any = docSnap.data();

  if (user === data.user) {
    await updateDoc(docRef, {
      contents: contents,
    });
  } else {
    alert("수정 권한이 없습니다.");
  }
};
