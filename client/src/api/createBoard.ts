import { firebaseApp } from "../config/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { store } from "../redux/store";

const db = getFirestore(firebaseApp);

export const createBoard = async (title: string, contents: string) => {
  let today = new Date();
  let user = store.getState().authStore.uid;

  if (user !== "") {
    const docRef = await addDoc(collection(db, "board"), {
      title: title,
      contents: contents,
      createdAt: today.toLocaleString(),
      찬성: [0, 0],
      반대: [0, 0],
      user: store.getState().authStore.uid,
    });
  }
};
