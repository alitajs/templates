import React, { FC } from 'react';
import { List } from 'antd-mobile';
import { Fires } from '..';
import styles from './index.less';

export interface ListColumnGroupDataProps {
  id: string | number;
  img: string;
  title: string;
  hotValue: number;
  account: number;
  totalAccount: number;
  type: string;
  place: string;
  tip: string;
  distance: number;
}

interface ListColumnGroupProps {
  data: ListColumnGroupDataProps[];
  title: string;
  subTitle?: string;
  onClick?: (e: ListColumnGroupDataProps) => void;
}

const ListColumnGroupPage: FC<ListColumnGroupProps> = ({
  data = [],
  title = '',
  subTitle = '',
  onClick = () => {},
}) => {
  return (
    <div className={styles.listColumnGroupStyle}>
      <List
        renderHeader={
          <div className={styles.renderHeaderStyle}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subTitle}</div>
          </div>
        }
      >
        {data.map((item: ListColumnGroupDataProps) => (
          <div key={item?.id} className={styles.dataContainer} onClick={() => onClick(item)}>
            <img src={item?.img} alt="" className={styles.dataImg} />
            <div className={styles.rightContainer}>
              <div className={styles.title}>{item?.title}</div>
              <div className={styles.valueAndAccount}>
                <Fires value={item?.hotValue} />
                <div className={styles.account}>¥{item?.account}/人</div>
              </div>
              <div className={styles.totalAccount}>¥{item?.totalAccount}</div>
              <div className={styles.positions}>
                <div>{item?.type}</div>
                <div className={styles.place}>{item?.place}</div>
                <div className={styles.distance}>{item?.distance}km</div>
              </div>
              <span className={styles.tip}>{item?.tip}</span>
            </div>
          </div>
        ))}
      </List>
    </div>
  );
};

export default ListColumnGroupPage;
