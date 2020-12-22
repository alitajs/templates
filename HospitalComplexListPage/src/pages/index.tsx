import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }
const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const HospitalComplexListPage: FC<PageProps> = () => {
  return (
    <List className={styles.listStyle}>
      <Item thumb={BgImg}>
        <Flex direction="column" align="start" justify="start">
          <span className={styles.HospitalName}>美莱整形医疗美容</span>
          <Flex>
            <span className={styles.distance}>2.6km</span>
            <span className={styles.placeName}>望京中环南路6号</span>
          </Flex>
          <Flex>
            <div className={styles.label}>综合医院</div>
            <div className={styles.label}>医美专险</div>
          </Flex>
        </Flex>
      </Item>
      <Item>
        <Flex justify="between" style={{ marginBottom: '0.09rem' }}>
          <span className={styles.salePrice}>￥8658</span>
          <span className={styles.service}>
            [HPV宫颈癌疫苗]3次接种服务套餐服务内容内容内容内容内容内容
          </span>
        </Flex>
        <Flex justify="between">
          <span className={styles.originPrice}>门市价:￥11200</span>
          <span className={styles.payPeopleNum}>2111人付款</span>
        </Flex>
      </Item>
    </List>
  );
};

export default HospitalComplexListPage;
