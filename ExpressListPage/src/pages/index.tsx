import React, { FC } from 'react';
import { Input, Button } from 'antd';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';
import ScanImg from '../../assets/scanImg.png';

interface PageProps {}

const { Item } = List;
const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const listData = [
  {
    id: 1,
    icon: BgImg,
    title: '快递公司',
    expressOrderNumber: '12034131310000',
  },
  {
    id: 2,
    icon: BgImg,
    title: '快递公司',
    expressOrderNumber: '12034131310000',
  },
];

const ExpressListPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.searchExpress}>查快递</span>
        <Input
          placeholder="输入或扫一扫快递单号"
          suffix={<img src={ScanImg} alt="ScanImg.png" className={styles.scanImg} />}
        ></Input>
      </div>
      <List
        renderHeader={
          <Flex justify="between">
            <span>历史记录</span>
            <Button type="link">清空记录</Button>
          </Flex>
        }
      >
        {listData.map((val) => (
          <Item key={val.id} thumb={val.icon}>
            <Flex direction="column" align="start" justify="center">
              <span className={styles.title}>{val.title}</span>
              <span className={styles.expressOrderNumber}>{val.expressOrderNumber}</span>
            </Flex>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ExpressListPage;
