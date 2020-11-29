import React, { FC } from 'react';

import styles from './index.less';

export interface MainCardDataProps {
  id: string | number;
  img: string;
  title: string;
  account: number | string;
  saleNum: number;
  tip?: string;
  tipList?: string[];
}

interface MainCardProps {
  data: MainCardDataProps[];
  title: string;
  subTitle: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  itemClick: (e: MainCardDataProps) => void;
}

const MainCard: FC<MainCardProps> = ({
  data = [],
  title = '',
  subTitle = '',
  style = {},
  onClick = () => {},
  itemClick,
}) => {
  return (
    <div className={styles.mainCardContainer} style={style}>
      <div className={styles.titleCardContainer} onClick={onClick}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
      <div className={styles.dataContainer}>
        {data.map((item: MainCardDataProps) => (
          <div className={styles.dataItem} key={item?.id} onClick={() => itemClick(item)}>
            <div className={styles.dataImg}>
              <img src={item?.img} alt="" className={styles.itemImg} />
              {item?.tip && <div className={styles.tip}>{item?.tip}</div>}
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemTitle}>{item?.title}</div>
              <div className={styles.otherInfo}>
                <div className={styles.accountAndTip}>
                  <div className={styles.account}>¥{item?.account}</div>
                  {(item?.tipList || []).map((tipItem) => (
                    <div key={tipItem} className={styles.tipList}>
                      {tipItem}
                    </div>
                  ))}
                </div>
                <div className={styles.saleNum}>月销{item?.saleNum}件</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCard;
