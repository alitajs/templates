import React, { FC, useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const AbcPage: FC<PageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.center}>
      <Button className={styles.demo} loading={loading}>hello world</Button>
    </div>
  );
};

export default AbcPage;
