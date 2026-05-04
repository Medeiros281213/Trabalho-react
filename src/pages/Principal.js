import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Principal() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      const user = auth.currentUser;

      if (user) {
        const ref = doc(db, "usuarios", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setUserData(snap.data());
        }
      }
    };

    carregar();
  }, []);

  return (
    <div>
      <h2>Principal</h2>

      {userData && (
        <>
          <p>Nome: {userData.nome}</p>
          <p>Sobrenome: {userData.sobrenome}</p>
          <p>Nascimento: {userData.nascimento}</p>
        </>
      )}
    </div>
  );
}