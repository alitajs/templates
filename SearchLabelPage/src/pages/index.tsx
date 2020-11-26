import React, { FC } from 'react';
import { List, SearchBar, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

const SearchLabelPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar placeholder="搜素你需要的商品热门关键词" />
      </div>
      <List renderHeader="搜索历史" className={styles.gridStyle}>
        <Flex justify="around">
          <Flex.Item>体育场馆预订</Flex.Item>
          <Flex.Item>停车泊位</Flex.Item>
          <Flex.Item>爱心捐献</Flex.Item>
        </Flex>
        <Flex justify="around">
          <Flex.Item>蚂蚁借呗</Flex.Item>
          <Flex.Item style={{ background: '#F5F5F5' }}></Flex.Item>
          <Flex.Item style={{ background: '#F5F5F5' }}></Flex.Item>
        </Flex>
      </List>
      <List renderHeader="搜索发现" className={styles.gridStyle}>
        <Flex justify="around">
          <Flex.Item>体育场馆预…</Flex.Item>
          <Flex.Item>停车泊位</Flex.Item>
          <Flex.Item>厉害了我的国</Flex.Item>
        </Flex>
        <Flex justify="around">
          <Flex.Item>蚂蚁借呗</Flex.Item>
          <Flex.Item>最多五个字…</Flex.Item>
          <Flex.Item style={{ background: '#F5F5F5' }}></Flex.Item>
        </Flex>
      </List>
    </div>
  );
};

export default SearchLabelPage;
