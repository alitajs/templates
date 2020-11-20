import React, { FC, useState, useEffect } from 'react';
import styles from './index.less';

interface PageProps {
}

const src: FC<PageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.center}>
      <div className={styles.demo}>
        hello world,{loading ? 'isLoading' : ''}
      </div>
    </div>
  );
};

export default src;
