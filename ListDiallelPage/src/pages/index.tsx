import React, { FC } from 'react';
import styles from './index.less';

interface PageProps {}

const data = Array.from(new Array(4)).map((item, i) => ({
  id: i,
  title: '标题标题标题',
  desc: '描述描述描述',
}));

const ListDiallelPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        {data.map((item) => (
          <div key={item?.id} className={styles.dataItem}>
            <div className={styles.title}>{item?.title}</div>
            <div className={styles.desc}>{item?.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDiallelPage;
