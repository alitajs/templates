import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}
const { Item } = List;

const ConsultingListPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <List className={styles.listStyle}>
        <Item>
          <span className={styles.question}>
            我想做近视手术，请问手术一般需要多少钱术前需要做些准备以及手术有无风险呢？
          </span>
          <Flex justify="between">
            <Flex>
              <span className={styles.watchNum}>看过8400</span>
              <span className={styles.goodNum}>赞680</span>
            </Flex>
            <span className={styles.label}>看看医生怎么说</span>
          </Flex>
        </Item>
      </List>
      <List className={styles.listStyle}>
        <Item>
          <span className={styles.question}>
            我想做近视手术，请问手术一般需要多少钱术前需要做些准备以及手术有无风险呢？
          </span>
          <Flex justify="between">
            <Flex>
              <span className={styles.watchNum}>看过8400</span>
              <span className={styles.goodNum}>赞680</span>
            </Flex>
            <span className={styles.label}>看看医生怎么说</span>
          </Flex>
        </Item>
      </List>
    </div>
  );
};

export default ConsultingListPage;
