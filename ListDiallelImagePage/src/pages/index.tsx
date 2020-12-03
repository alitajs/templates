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

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const data = [
  {
    id: '1',
    img: BgImg,
    title: '欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装',
    account: 378,
    saleNum: 20111,
    tipList: ['积分兑换'],
  },
  {
    id: '2',
    img: BgImg,
    title: '欧舒丹甜蜜樱',
    account: 40,
    saleNum: 20111,
    tip: '最高返9元',
  },
  {
    id: '3',
    img: BgImg,
    title: '欧舒丹甜蜜樱花沐浴啫喱/身体乳套装',
    account: 378,
    saleNum: 20111,
    tip: '最高返9元',
    tipList: ['积分兑换'],
  },
  {
    id: '4',
    img: BgImg,
    title: '欧舒丹甜蜜樱花沐浴啫喱/身体乳套装',
    account: 40,
    saleNum: 20111,
  },
];

const ListDiallelImagePage: FC<PageProps> = () => {
  /**
   * 点击事件
   */
  const itemClick = (e: MainCardDataProps) => console.log(e);

  return (
    <div className={styles.listDiallelImageContainer}>
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

export default ListDiallelImagePage;
