import Debug from 'debug';
import { useState , useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';

const log = Debug('App:UseContent');
log.log = console.log.bind(console);

export default function useContent(target) {
  const [content , setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
    .firestore()
    .collection(target)
    .get()
    .then((snapshot) => {
        const allContent = snapshot.docs.map((doc) => ({
          ...doc.data() , 
          docId: doc.id
        }));

        setContent(allContent);
      })
      .catch(err => console.log(err.message));
    }, []);

    return { [target]: content };
}