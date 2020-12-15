import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;

const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const ItemCoursePage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.listStyle}>
        <List>
          <Item arrow="horizontal">
            <Flex direction="column" align="start" justify="between">
              <Flex align="center">
                <img src={BgImg} alt="BgImg.png" className={styles.listImg} />
                <span className={styles.listOrigin}>支付宝</span>
              </Flex>
              <span className={styles.listIntroduce}>我应该拿出收入的多少来做养老投资?</span>
              <Flex justify="between">
                <span className={styles.listTitle}>专栏《小白买房攻略》</span>
                <span className={styles.pastTime}>8分钟</span>
              </Flex>
            </Flex>
          </Item>
        </List>
      </div>
    </div>
  );
};

export default ItemCoursePage;
