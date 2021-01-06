import React, { FC } from 'react';

import styles from './index.less';

interface VedioProductDataProps {
  id: string | number;
  img: string;
  title?: string;
  subTitle?: string;
  tip?: string;
  originalPrice?: string | number;
  nowPrice?: string | number;
}

interface VedioProductProps {
  data: VedioProductDataProps[];
  itemClick: (e: VedioProductDataProps) => void;
}

const VedioProduct: FC<VedioProductProps> = ({ data = [], itemClick }) => {
  return (
    <div className={styles.vedioProductStyle}>
      {data.map((item, index) => {
        if (index === 0)
          return (
            <div key={item.id} className={styles.proOne} onClick={() => itemClick(item)}>
              <img src={item?.img} alt="" className={styles.proOneImg} />
            </div>
          );
        return (
          <div key={item.id} className={styles.proItem} onClick={() => itemClick(item)}>
            <div className={styles.proImgDiv}>
              <img src={item?.img} alt="" className={styles.proImg} />
              {item?.tip && <div className={styles.tip}>{item?.tip}</div>}
            </div>
            <div className={styles.title}>{item?.title}</div>
            <div className={styles.subTitle}>{item?.subTitle}</div>
            <div className={styles.priceDiv}>
              <div className={styles.nowPrice}>¥{item?.nowPrice}</div>
              <div className={styles.originalPrice}>{item?.originalPrice}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VedioProduct;
