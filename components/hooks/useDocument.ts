import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { useRouter } from 'next/router';

//firebase imports
import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (c: any, id: any) => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(true);

  let result: any = []
  const router = useRouter();
  const query = router.query;
  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) {
        setError('error');
        return;
      }
      let docRef = doc(db, c, id);
      const unsub = onSnapshot(
        docRef,
        (doc: any) => {
          result.push({ ...doc.data(), id: doc.id })

          setError(null);
          setIsPending(false);
        },
        (err) => {
          setError("failed to get document");
          setIsPending(false);
          console.log(result);
        }
      );
      return () => unsub();
    };
    fetchData();
    console.log(result);
  }, [c, id, query]);
  return { result, isPending, error };
};