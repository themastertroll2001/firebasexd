import React, { useEffect } from 'react';
import storage from '../context/storage';
import { motion } from 'framer-motion';

const Barra = ({ file, setFile }) => {
  const { progress, url } = storage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default Barra;