import React, { FC } from 'react';
import styles from './index.less';

interface HalfMoneyDataProps {
  id: string | number;
  img: string;
  tip?: string;
  originalPrice: number | string;
  nowPrice: number | string;
}

interface HalfMoneyProps {
  data: HalfMoneyDataProps[];
  itemClick: (e: HalfMoneyDataProps) => void;
}

const HalfMoney: FC<HalfMoneyProps> = ({ data = [], itemClick }) => {
  return (
    <div className={styles.halfMoneyStyle}>
      {data.map((item) => (
        <div key={item?.id} className={styles.halfMoneyItem} onClick={() => itemClick(item)}>
          <div className={styles.imgDiv}>
            <img src={item?.img} alt="" className={styles.img} />
            {item?.tip && <div className={styles.tip}>{item?.tip}</div>}
          </div>
          <div className={styles.priceDiv}>
            <div className={styles.nowPrice}>¥{item?.nowPrice}</div>
            <div className={styles.originalPrice}>{item?.originalPrice}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HalfMoney;
