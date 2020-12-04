import React, { FC } from 'react';
import { Flex, List } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const SubscriptionPage: FC<PageProps> = () => {
  return (
    <List
      renderHeader={
        <Flex align="stretch">
          <img
            src={BgImg}
            alt="BgImg.png"
            style={{
              height: '3.6rem',
              width: '100%',
              borderBottom: '0.01rem solid #FFFFFF',
            }}
          />
        </Flex>
      }
      className={styles.listStyle}
    >
      <Item>
        <Flex justify="between" direction="column" align="start">
          <span className={styles.articleTile}>多币种灵活组合，助您优化资产</span>
          <span className={styles.articleIntroduce}>
            三大包装类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
          </span>
          <div>
            <span className={styles.babelStyle}>标签</span>
            <span className={styles.articleOrigin}>文章来源</span>
          </div>
        </Flex>
      </Item>
      <Item arrow="horizontal" className={styles.checkDetail}>
        阅读全文
      </Item>
    </List>
  );
};

export default SubscriptionPage;
