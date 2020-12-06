import React, { FC } from 'react';

import GrayFirePng from '../../assets/grayFire.png';
import ActiveFirePng from '../../assets/activeFire.png';
import styles from './index.less';

interface FilesProps {
  value: number;
}

const Files: FC<FilesProps> = ({ value = 0 }) => {
  return (
    <div className={styles.fireContainer}>
      {[1, 2, 3, 4, 5].map((item: number) => (
        <img src={item <= value ? ActiveFirePng : GrayFirePng} alt="" className={styles.fireImg} />
      ))}
    </div>
  );
};

export default Files;
