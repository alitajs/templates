import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }
const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const HospitalListPage: FC<PageProps> = () => {
  return (
    <List className={styles.listStyle}>
      <Item thumb={BgImg}>
        <Flex direction="column" align="start" justify="start">
          <span className={styles.HospitalName}>浙江大学医学院附属第一医院</span>
          <span className={styles.subject}>内分泌 / 中医 / 营养科 / 妇产科</span>
          <Flex>
            <div className={styles.label}>综合医院</div>
            <div className={styles.label}>三甲医院</div>
            <div className={styles.label}>公立医院</div>
          </Flex>
        </Flex>
      </Item>
    </List>
  );
};

export default HospitalListPage;
