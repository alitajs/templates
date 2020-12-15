import React, { FC } from 'react';
import { WhiteSpace } from 'antd-mobile';
import { DataItem } from '../components';
import styles from './index.less';

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const data = [
  {
    img: BgImg,
    title: '小林寿司阿里高级餐厅',
    subTitle: '天妇罗套餐',
    desc: '热卖爆款',
    tip: '热卖',
  },
  {
    img: BgImg,
    title: '新记茶餐厅高级餐厅',
    subTitle: '天妇罗套餐',
    desc: '5折好货',
    tip: '热卖',
  },
  {
    img: BgImg,
    title: '神田川高级餐厅',
    subTitle: '天妇罗套餐',
    desc: '距你100m',
  },
];

const ListColumnsPage: FC<PageProps> = () => {
  return (
    <div className={styles.listColumnsContainer}>
      <DataItem data={data} />
      <WhiteSpace size="lg" />
      <DataItem data={data} />
    </div>
  );
};

export default ListColumnsPage;
