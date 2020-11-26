import React, { FC } from 'react';
import { List, SearchBar, Tabs } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;

interface PageProps {}

const SearchTabsPage: FC<PageProps> = () => {
  const tabs = [
    { title: '每日推荐', key: '1' },
    { title: '热门搜索', key: '2' },
    { title: '新上好课', key: '3' },
    { title: '新手入门', key: '4' },
  ];
  const listData = [
    {
      id: 1,
      content: '汉堡抢新品福利券',
    },
    {
      id: 2,
      content: '手机充值抽免单红包',
    },
    {
      id: 3,
      content: '厉害了我的国',
    },
    {
      id: 4,
      content: '蚂蚁森林',
    },
  ];
  const ListTabsItem = () => {
    return (
      <List renderHeader="常用商家">
        {listData.map((val) => (
          <Item
            key={val.id}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png"
          >
            {val.content}
          </Item>
        ))}
      </List>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar placeholder="搜素你需要的商品热门关键词" />
      </div>
      <div className={styles.tabsContent}>
        <Tabs tabs={tabs} tabBarActiveTextColor="#1677FF">
          <ListTabsItem key="1" />
          <ListTabsItem key="2" />
          <ListTabsItem key="3" />
          <ListTabsItem key="4" />
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTabsPage;
