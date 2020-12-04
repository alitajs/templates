import React, { FC } from 'react';
import { Flex, List } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const listData = [
  {
    id: 1,
    content: '外币专家最新活动详情都在这里全面解析解析',
    icon: BgImg,
  },
  {
    id: 2,
    content: '多一份金融了解，多一份财富保障和关爱',
    icon: BgImg,
  },
  {
    id: 3,
    content: '子女教育金融规划',
    icon: BgImg,
  },
];
const SubscriptionMultiPage: FC<PageProps> = () => {
  return (
    <List
      renderHeader={
        <Flex align="stretch" style={{ position: 'relative' }}>
          <img
            src={BgImg}
            alt="BgImg.png"
            style={{
              height: '3.6rem',
              width: '100%',
              borderBottom: '0.01rem solid #FFFFFF',
            }}
          />
          <span className={styles.newsIntroduce}>多币种灵活组合，助您优化资产</span>
        </Flex>
      }
      className={styles.listStyle}
    >
      {listData.map((val) => (
        <Item
          key={val.id}
          extra={
            <img
              src={val.icon}
              alt="BgImg.png"
              style={{ width: '0.8rem', height: '0.8rem', borderRadius: '0.08rem' }}
            />
          }
          className={styles.newsList}
        >
          {val.content}
        </Item>
      ))}
    </List>
  );
};

export default SubscriptionMultiPage;
