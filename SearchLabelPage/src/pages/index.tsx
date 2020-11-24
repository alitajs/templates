import React, { FC } from 'react';
import { List, SearchBar, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

const SearchLabelPage: FC<PageProps> = () => {
  const tagTopData = [
    {
      id: 1,
      text: '体育场馆预订',
    },
    {
      id: 2,
      text: '停车泊位',
    },
    {
      id: 3,
      text: '爱心捐献',
    },
    {
      id: 4,
      text: '蚂蚁借呗',
    },
  ];
  const tagBottomData = [
    {
      id: 1,
      text: '体育场馆预…',
    },
    {
      id: 2,
      text: '停车泊位',
    },
    {
      id: 3,
      text: '厉害了我的国',
    },
    {
      id: 4,
      text: '蚂蚁借呗',
    },
    {
      id: 5,
      text: '最多五个字…',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar placeholder="搜素你需要的商品热门关键词" />
      </div>
      <List renderHeader="搜索历史" className={styles.gridStyle}>
        <Flex wrap="wrap" justify="start">
          {tagTopData.map((val) => (
            <div className={styles.flexItemStyle} key={val.id}>
              {val.text}
            </div>
          ))}
        </Flex>
      </List>
      <List renderHeader="搜索发现" className={styles.gridStyle}>
        <Flex wrap="wrap" justify="start">
          {tagBottomData.map((val) => (
            <div className={styles.flexItemStyle} key={val.id}>
              {val.text}
            </div>
          ))}
        </Flex>
      </List>
    </div>
  );
};

export default SearchLabelPage;
