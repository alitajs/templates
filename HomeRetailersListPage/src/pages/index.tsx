import React, { FC, useState } from 'react';
import { SearchBar, List } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const headerGridData = [
  { id: '1', text: '标题文字', icon: BgImg },
  { id: '2', text: '标题文字', icon: BgImg },
  { id: '3', text: '标题文字', icon: BgImg },
  { id: '4', text: '标题五个字', icon: BgImg },
  { id: '5', text: '标题文字', icon: BgImg },
];

const listData = [
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
  {
    id: '4',
    img: BgImg,
    title: '欧舒丹甜蜜樱花沐浴啫喱/身体乳套装沐浴啫喱',
    account: 420,
    saleNum: 20111,
    tipList: ['法国品牌', '过敏包退', '官方直售'],
  },
];

const HomeRetailersListPage: FC<PageProps> = () => {
  const [searchValue, setSearchValue] = useState<string>(''); // 搜索输入框值
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <SearchBar
          placeholder="搜索词"
          value={searchValue}
          onChange={(e: string) => setSearchValue(e)}
          onSubmit={(e: string) => console.log(e)}
          onCancel={() => setSearchValue('')}
        />
      </div>
      <div className={styles.headerGrid}>
        {headerGridData.map((item) => (
          <div className={styles.gridItem} key={item?.id} onClick={() => console.log(item)}>
            <img src={item?.icon} alt="" className={styles.gridImg} />
            <div className={styles.gridText}>{item?.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.listContainer}>
        <List>
          {listData.map((item) => (
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
    </div>
  );
};

export default HomeRetailersListPage;
