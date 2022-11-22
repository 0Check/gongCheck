import { firebaseApp } from "../config/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export const getServiceDetail = async (serviceID: string) => {
  const docRef = doc(db, "serviceDetail", serviceID);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
