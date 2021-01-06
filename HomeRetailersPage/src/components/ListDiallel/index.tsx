import React, { FC } from 'react';
import styles from './index.less';

interface ListDiallelProps {
  id: string | number;
  title: string;
  desc: string;
}

interface PageProps {
  data: ListDiallelProps[];
  itemClick: (e: ListDiallelProps) => void;
}

const ListDiallelPage: FC<PageProps> = ({ data = [], itemClick }) => {
  return (
    <div className={styles.listDiallelStyle}>
      <div className={styles.listContainer}>
        {data.map((item) => (
          <div key={item?.id} className={styles.dataItem} onClick={() => itemClick(item)}>
            <div className={styles.title}>{item?.title}</div>
            <div className={styles.desc}>{item?.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDiallelPage;
