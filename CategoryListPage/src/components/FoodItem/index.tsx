import React, { FC } from 'react';
import styles from './index.less';

import AddPng from '../../assets/add.png';
import ReducePng from '../../assets/reduce.png';

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
  categoryId: string | number; // 类目id
  operClick: (data: FoodDataProps, id: string | number, type: 'add' | 'reduce') => void; // 加减食物的操作
  foodValue: any;
}

const FoodItem: FC<FoodItemProps> = (props) => {
  const { data, categoryId = '', operClick, foodValue = {} } = props;
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
          <div className={styles.oper}>
            {foodValue[`${categoryId}-${data?.id}`]?.quantity > 0 && (
              <React.Fragment>
                <img
                  src={ReducePng}
                  alt=""
                  className={styles.addImg}
                  onClick={() => operClick(data, categoryId, 'reduce')}
                />
                <div className={styles.num}>{foodValue[`${categoryId}-${data?.id}`]?.quantity}</div>
              </React.Fragment>
            )}
            <img
              src={AddPng}
              alt=""
              className={styles.addImg}
              onClick={() => operClick(data, categoryId, 'add')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
