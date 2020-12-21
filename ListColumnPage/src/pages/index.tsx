import React, { FC, useState, useEffect } from 'react';
import { List } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const data = [
  {
    id: '1',
    img: BgImg,
    title: '欧舒丹甜蜜樱花沐浴啫喱/身体乳套装沐浴啫喱',
    account: 420,
    saleNum: 20111,
    tipList: ['法国品牌', '过敏包退', '官方直售'],
  },
  {
    id: '2',
    img: BgImg,
    title: '欧舒丹甜蜜樱花沐浴啫喱/身体乳套装沐浴啫喱',
    account: 420,
    saleNum: 20111,
    tipList: ['法国品牌', '过敏包退', '官方直售'],
  },
  {
    id: '3',
    img: BgImg,
    title: '欧舒丹甜蜜樱花沐浴啫喱/身体乳套装沐浴啫喱',
    account: 420,
    saleNum: 20111,
    tipList: ['法国品牌', '过敏包退', '官方直售'],
  },
];

const ListColumnPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <List>
        {data.map((item) => (
          <Item key={item?.id}>
            <div className={styles.listItem} onClick={() => console.log(item)}>
              <img src={item?.img} alt="" className={styles.listImg} />
              <div className={styles.itemContainer}>
                <div className={styles.title}>{item?.title}</div>
                <div className={styles.tipList}>
                  {(item?.tipList || []).map((tip, index) => (
                    <React.Fragment key={tip}>
                      <div className={styles.tipItem}>{tip}</div>
                      {index + 1 !== item?.tipList.length && <div className={styles.line} />}
                    </React.Fragment>
                  ))}
                </div>
                <span className={styles.integral}>积分兑换</span>
                <span className={styles.sale}>月销{item?.saleNum}件</span>
                <div className={styles.account}>¥{item?.account}</div>
              </div>
            </div>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ListColumnPage;
