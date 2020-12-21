import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const listData = [
  {
    id: 1,
    icon: BgImg,
    title: '24个字壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒捌玖拾',
    introduce: '20个字壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒',
    author: '子怒／心理学博士',
    salePrice: '¥49.9',
    originPrice: '¥99.9',
  },
  {
    id: 2,
    icon: BgImg,
    title: '零基础学会全部英语语法',
    introduce: '王向红经典语法课，百万学习者好评推荐',
    author: '王向红／英语教学专家',
    salePrice: '¥49.9',
    originPrice: '',
  },
  {
    id: 3,
    icon: BgImg,
    title: '教你正确培养孩子',
    introduce: '新手父母的必修课',
    author: '风胡子／支付宝首席交互设计师',
    salePrice: '¥49.9',
    originPrice: '',
  },
];
const ListCoursePage: FC<PageProps> = () => {
  return (
    <div className={styles.listStyle}>
      <List>
        {listData.map((val) => (
          <Item key={val.id} thumb={val.icon}>
            <Flex direction="column" align="start" justify="start">
              <span className={styles.title}>{val.title}</span>
              <span className={styles.introduce}>{val.introduce}</span>
              <span className={styles.author}>{val.author}</span>
              <Flex align="center">
                <span className={styles.salePrice}>{val.salePrice}</span>
                <span className={styles.originPrice}>{val.originPrice}</span>
              </Flex>
            </Flex>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ListCoursePage;
