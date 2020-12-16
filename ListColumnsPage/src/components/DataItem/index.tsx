import React, { FC } from 'react';
import styles from './index.less';

interface DataProps {
  [key: string]: any;
}

interface DataItemProps {
  data: DataProps[];
}

const DataItem: FC<DataItemProps> = ({ data = [] }) => {
  return (
    <div className={styles.dataItemContainer}>
      {data.map((item) => (
        <div className={styles.dataItem}>
          <div className={styles.dataImg}>
            <img src={item?.img} alt="" className={styles.itemImg} />
            <div className={styles.itemTip}>{item?.tip}</div>
          </div>
          <div className={styles.itemTitle}>
            <div>{item?.title}</div>
          </div>
          <div className={styles.itemSubTitle}>{item?.subTitle}</div>
          <div className={styles.itemDesc}>{item?.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default DataItem;
