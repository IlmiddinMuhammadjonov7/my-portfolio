import { db } from "./firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useCollection(c: any) {
  const [documents, setDocuments] = useState<any>(null);

  const ref = collection(db, c);

  useEffect(() => {
    const unsup = onSnapshot(ref, (snapshot) => {
      const results: any = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => unsup();
  }, [c]);

  return { documents };
}
