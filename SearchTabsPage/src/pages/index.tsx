import React, { FC } from 'react';
import styles from './index.less';
import { List, SearchBar, Tabs } from 'antd-mobile';

const { Item } = List;
interface PageProps {}

const SearchTabsPage: FC<PageProps> = () => {
  const tabs = [
    { title: '每日推荐' },
    { title: '热门搜索' },
    { title: '新上好课' },
    { title: '新手入门' },
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
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar placeholder="搜素你需要的商品热门关键词" />
      </div>
      <div className={styles.tabsContent}>
        <Tabs tabs={tabs} initialPage={0}>
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
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTabsPage;
