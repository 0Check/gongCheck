import { firebaseApp } from "../config/firebase";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { store } from "../redux/store";
import { off } from "process";

const db = getFirestore(firebaseApp);

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
  console.log(age);

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
  } else {
    alert("이미 투표를 했습니다.");
  }
};
