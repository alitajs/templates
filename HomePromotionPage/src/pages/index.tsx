/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import { SearchBar, Tabs } from 'antd-mobile';
import { TopCard, MainCard, TopCardDataProps, MainCardDataProps } from '../components';
import styles from './index.less';

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

interface PageProps {}

const tab = [
  { title: '选项卡1' },
  { title: '选项卡2' },
  { title: '选项卡3' },
  { title: '选项卡4' },
  { title: '选项卡5' },
];

const tData = [
  { id: '1', img: BgImg, title: '欧舒丹甜蜜樱', account: 378, subTitle: 201 },
  { id: '2', img: BgImg, title: '欧舒丹甜蜜樱', account: 378, subTitle: '单人spa套餐' },
  { id: '3', img: BgImg, title: '欧舒丹甜蜜樱', account: 378, subTitle: 201, isNew: true },
];

const mData = [
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
    account: 378,
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
];

const HomePromotionPage: FC<PageProps> = () => {
  const [searchValue, setSearchValue] = useState<string>(''); // 搜索输入框值
  const [tabs] = useState(tab); // tab数据
  const [topData] = useState(tData);
  const [mainData] = useState(mData);
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <SearchBar
          placeholder="健康理财"
          value={searchValue}
          onChange={(e: string) => setSearchValue(e)}
          onSubmit={(e: string) => console.log(e)}
          onCancel={() => setSearchValue('')}
        />
      </div>
      <div className={styles.tabStyle}>
        <Tabs
          tabs={tabs}
          renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={4} />}
          tabBarUnderlineStyle={{ height: '0.04rem', backgroundColor: '#1677FF' }}
        >
          <div className={styles.pageContainer}>
            <TopCard
              data={topData}
              title="主标题"
              subTitle="标题描述"
              onClick={() => console.log('topCard click')}
              itemClick={(e: TopCardDataProps) => console.log(e)}
            />
            <MainCard
              data={mainData}
              title="主标题"
              subTitle="标题描述"
              style={{ paddingTop: '0.4rem' }}
              onClick={() => console.log('mainCard click')}
              itemClick={(e: MainCardDataProps) => console.log(e)}
            />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePromotionPage;
