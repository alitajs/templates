import React, { FC } from 'react';

import RightPng from '../../assets/right.png';
import styles from './index.less';

export interface TopCardDataProps {
  id: string | number;
  title: string;
  img: string;
  account: string | number;
  subTitle: string | number;
  isNew?: boolean;
}

interface TopCardProps {
  data: TopCardDataProps[]; // 数据源
  title: string; // 主标题
  subTitle: string; // 副标题
  onClick?: () => void; // 卡片点击事件
  itemClick?: (e: TopCardDataProps) => void; // 数据点击事件
}

const TopCard: FC<TopCardProps> = (props) => {
  const { data = [], title, subTitle, onClick = () => {}, itemClick = () => {} } = props;
  return (
    <div className={styles.topCardContainer}>
      <div className={styles.titleContainer} onClick={onClick}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <img src={RightPng} alt="" className={styles.rightImg} />
      </div>
      <div className={styles.dataContainer}>
        {data.map((item) => (
          <div className={styles.dataItem} key={item?.id} onClick={() => itemClick(item)}>
            <div className={styles.dataImg}>
              <img src={item?.img} alt="" className={styles.itemImg} />
              {item?.isNew && <div className={styles.isNew}>新品上架</div>}
            </div>
            <div className={styles.dataTitle}>{item?.title}</div>
            <div className={styles.dataAccount}>¥{item?.account}</div>
            <div className={styles.dataSubTitle}>
              {typeof item?.subTitle === 'number' ? `月销${item?.subTitle}件` : `${item?.subTitle}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCard;
