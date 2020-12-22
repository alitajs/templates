import React, { FC } from 'react';

import styles from './index.less';

export interface ModuleListDataProps {
  id: string | number;
  img: string;
  text: string;
}

interface ModuleListProps {
  data: ModuleListDataProps[];
  onClick?: (e: ModuleListDataProps) => void;
}

const ModuleList: FC<ModuleListProps> = ({ data = [], onClick = () => {} }) => {
  return (
    <div className={styles.moduleListStyle}>
      {data.map((item) => (
        <div key={item?.id} className={styles.moduleItem} onClick={() => onClick(item)}>
          <img src={item?.img} alt="" className={styles.moduleImg} />
          <div className={styles.moduleText}>{item?.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
