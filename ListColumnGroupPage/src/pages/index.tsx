import React, { FC } from 'react';
import { List } from 'antd-mobile';
import { Fires } from '../components';
import styles from './index.less';

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const data = [
  {
    id: 1,
    img: BgImg,
    title: '轻井泽(文三路店）',
    hotValue: 2,
    account: 163,
    totalAccount: 420,
    type: '西餐',
    place: '文三路',
    tip: '积分兑换',
    distance: 2.6,
  },
  {
    id: 2,
    img: BgImg,
    title: '轻井泽(文三路店）',
    hotValue: 2,
    account: 163,
    totalAccount: 420,
    type: '西餐',
    place: '文三路文三路文三路文三路文三路文三路文三路文三路',
    tip: '积分兑换',
    distance: 2.6,
  },
  {
    id: 3,
    img: BgImg,
    title: '轻井泽(文三路店）',
    hotValue: 2,
    account: 163,
    totalAccount: 420,
    type: '西餐',
    place: '文三路',
    tip: '积分兑换',
    distance: 2.6,
  },
];

const ListColumnGroupPage: FC<PageProps> = () => {
  return (
    <div className={styles.listColumnGroupStyle}>
      <List>
        {data.map((item) => (
          <div key={item?.id} className={styles.dataContainer}>
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
