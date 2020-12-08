import React, { FC } from 'react';
import { List, Flex, Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const listData = [
  {
    id: 1,
    icon: BgImg,
    title: '第24课 Assertiveness 在生活中的应用及案例分析',
    updateTime: '昨天 16:09更新',
  },
  {
    id: 2,
    icon: BgImg,
    title: '第23课 如何 assertive 的面对冲突',
    updateTime: '昨天 16:09更新',
  },
  {
    id: 3,
    icon: BgImg,
    title: '第23课 如何 assertive 的面对冲突',
    updateTime: '昨天 16:09更新 ',
  },
  {
    id: 4,
    icon: BgImg,
    title: '第24课 Assertiveness 在生活中的应用及案例分析',
    updateTime: '昨天 16:09更新',
  },
];
const CourseTextPage: FC<PageProps> = () => {
  return (
    <div className={styles.listStyle}>
      <List
        renderHeader={
          <Flex>
            <Button type="ghost" inline size="small">
              倒序
            </Button>
            <Button type="ghost" inline size="small">
              缓存音频到本地
            </Button>
          </Flex>
        }
      >
        {listData.map((val) => (
          <Item key={val.id} thumb={val.icon}>
            <Flex direction="column" align="start" justify="center">
              <span className={styles.title}>{val.title}</span>
              <span className={styles.updateTime}>{val.updateTime}</span>
            </Flex>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default CourseTextPage;
