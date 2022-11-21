import { firebaseApp } from "../config/firebase";
import { getFirestore, doc, getDoc, deleteDoc } from "firebase/firestore";
import { store } from "../redux/store";

const db = getFirestore(firebaseApp);

export const deleteBoard = async (boardID: string) => {
  const docRef = doc(db, "board", boardID);
  const docSnap = await getDoc(docRef);
  let user = store.getState().authStore.uid;
  let data: any = docSnap.data();

  if (user === data.user) {
    await deleteDoc(docRef);
  } else {
    alert("삭제 권한이 없습니다.");
  }
};
