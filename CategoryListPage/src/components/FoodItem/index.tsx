import React, { FC } from 'react';
import styles from './index.less';

import AddPng from '../../assets/add.png';

export interface FoodDataProps {
  id: string | number;
  img: string;
  title: string;
  subTitle: string;
  monthSale: number;
  upNum: number;
  tip: string;
  amount: number;
}

interface FoodItemProps {
  data: FoodDataProps;
  categoryId: string | number;
}

const FoodItem: FC<FoodItemProps> = (props) => {
  const { data, categoryId = '' } = props;
  return (
    <div className={styles.foodItemStyle} key={data?.id}>
      <img src={data?.img} alt="" className={styles.foodImg} />
      <div className={styles.foodContent}>
        <div className={styles.title}>{`${data?.title}-${categoryId}-${data?.id}`}</div>
        <div className={styles.subTitle}>{data?.subTitle}</div>
        <div className={styles.subTitle}>
          月售{data?.monthSale}
          &nbsp;赞{data?.upNum}
        </div>
        <div className={styles.tipStyle}>{data?.tip}</div>
        <div className={styles.footer}>
          <div className={styles.money}>¥{data?.amount}</div>
          <img src={AddPng} alt="" className={styles.addImg} />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
