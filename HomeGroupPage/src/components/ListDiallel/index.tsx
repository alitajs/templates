import React, { FC } from 'react';
import styles from './index.less';

export interface ListDiallelDataProps {
  id: string | number;
  title: string;
  desc: string;
}

interface PageProps {
  data: ListDiallelDataProps[];
  onClick?: (e: ListDiallelDataProps) => void;
}

const ListDiallelPage: FC<PageProps> = ({ data = [], onClick = () => {} }) => {
  return (
    <div className={styles.listDiallelStyle}>
      <div className={styles.listContainer}>
        {data.map((item: ListDiallelDataProps) => (
          <div key={item?.id} className={styles.dataItem} onClick={() => onClick(item)}>
            <div className={styles.title}>{item?.title}</div>
            <div className={styles.desc}>{item?.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDiallelPage;
