import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

const { Item } = List;
const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const listData = [
  {
    id: 1,
    icon: BgImg,
    title: '从5万到100万,给家庭投资赋能给家庭投资赋能',
    secondaryTitle: '为你的幸福生活保驾护航 copy',
    labelLeft: '大师课推荐',
    labelRight: '积分兑换',
  },
  {
    id: 2,
    icon: BgImg,
    title: '从5万到100万,给家庭投资赋能给家庭投资赋能',
    secondaryTitle: '为你的幸福生活保驾护航 copy',
    labelLeft: '大师课推荐',
    labelRight: '积分兑换',
  },
];
const SubscriptionListPage: FC<PageProps> = () => {
  return (
    <List className={styles.listStyle}>
      {listData.map((val) => (
        <Item
          key={val.id}
          thumb={
            <div>
              <img src={val.icon} alt="" className={styles.listImg} />
              <span className={styles.listLabel}>标签</span>
            </div>
          }
        >
          <Flex direction="column" align="start">
            <span className={styles.title}>{val.title}</span>
            <span className={styles.secondaryTitle}>{val.secondaryTitle}</span>
            <Flex>
              <span className={styles.labelLeft}>{val.labelLeft}</span>
              <span className={styles.labelRight}>{val.labelRight}</span>
            </Flex>
          </Flex>
        </Item>
      ))}
    </List>
  );
};

export default SubscriptionListPage;
