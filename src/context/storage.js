import { useState, useEffect, useRef } from 'react';  
import { projectStorage, projectFirestore, timestamp } from '../firebase';
//import { ref, uploadBytes } from "firebase/storage";
//import { doc, getFirestore, setDoc } from "firebase/firestore";

const Storage = (file)  => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
  const storageRef = projectStorage.ref(file.name); //La linea de abajo reescribe esta linea
 //   const storageRef = ref(sttorage, `/items/${file.name}`);

    const collectionRef = projectFirestore.collection('images');
    //comment

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
     const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default Storage;
