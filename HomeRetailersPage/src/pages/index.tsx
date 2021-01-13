/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import { SearchBar, Carousel, WhiteSpace } from 'antd-mobile';
import {
  ListDiallel,
  ListColumnsWrong,
  ListColumn,
  Card,
  HalfMoney,
  VedioProduct,
} from '../components';
import styles from './index.less';

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const headerGridData = [
  { id: '1', text: '标题文字', icon: BgImg },
  { id: '2', text: '标题文字', icon: BgImg },
  { id: '3', text: '标题文字', icon: BgImg },
  { id: '4', text: '标题五个字', icon: BgImg },
  { id: '5', text: '标题文字', icon: BgImg },
];

const carouselData = Array.from(new Array(3)).map((item, i) => ({
  id: i,
  img: BgImg,
}));

const listDiallelData = Array.from(new Array(2)).map((item, i) => ({
  id: i,
  title: '标题标题标题',
  desc: '描述描述描述',
}));

const listColumnsWrongData = [
  { id: '1', img: BgImg, allImg: true },
  {
    id: '2',
    img: BgImg,
    title: '标题标题标题',
    desc: '描述描述',
    tip: '热卖',
    originalPrice: 80,
    realPrice: 45,
  },
  {
    id: '3',
    img: BgImg,
    title: '标题标题标题标题标题标题标题标题标题标题标题标题',
    desc: '描述描述',
    tip: '新品上架',
    originalPrice: 80,
    realPrice: 45,
  },
];

const listColumnData = [
  {
    id: '1',
    img: BgImg,
    title: '小林寿司阿里高级餐厅',
    subTitle: '天妇罗套餐',
    desc: '热卖爆款',
    tip: '热卖',
  },
  {
    id: '2',
    img: BgImg,
    title: '新记茶餐厅高级餐厅',
    subTitle: '天妇罗套餐',
    desc: '5折好货',
    tip: '热卖',
  },
  {
    id: '3',
    img: BgImg,
    title: '神田川高级餐厅',
    subTitle: '天妇罗套餐',
    desc: '距你100m',
  },
];

const vedioProductData = [
  { id: '1', img: BgImg },
  {
    id: '2',
    img: BgImg,
    title: '标题标题标题',
    subTitle: '描述描述',
    originalPrice: 80,
    nowPrice: 45,
    tip: '新品上架',
  },
  {
    id: '3',
    img: BgImg,
    title: 'tony guy美发',
    subTitle: '洗剪吹美发套餐',
    originalPrice: 80,
    nowPrice: 45,
    tip: '热卖',
  },
  {
    id: '4',
    img: BgImg,
    title: '悦露源西溪金',
    subTitle: '单人spa套餐',
    originalPrice: 80,
    nowPrice: 45,
    tip: '热卖',
  },
  {
    id: '5',
    img: BgImg,
    title: '麦歌KTV黄龙店铺迷你包3小时欢唱',
    subTitle: '迷你包3小时欢唱迷你包3小时欢唱',
    originalPrice: 80,
    nowPrice: 45,
    tip: '新品上架',
  },
];

const halfMoneyData = [
  {
    id: '1',
    img: BgImg,
    tip: '热卖',
    originalPrice: 80,
    nowPrice: 45,
  },
  {
    id: '2',
    img: BgImg,
    tip: '热卖',
    originalPrice: 80,
    nowPrice: 45,
  },
  {
    id: '3',
    img: BgImg,
    originalPrice: 80,
    nowPrice: 45,
  },
];

const HomeRetailersPage: FC<PageProps> = () => {
  const [searchValue, setSearchValue] = useState<string>(''); // 搜索输入框值
  const [cutDownData] = useState(['00', '14', '18']);

  return (
    <div className={styles.homeRetailersStyle}>
      <div className={styles.searchBar}>
        <SearchBar
          placeholder="搜索词"
          value={searchValue}
          onChange={(e: string) => setSearchValue(e)}
          onSubmit={(e: string) => console.log(e)}
          onCancel={() => setSearchValue('')}
        />
      </div>
      <div className={styles.headerGrid}>
        {headerGridData.map((item) => (
          <div className={styles.gridItem} key={item?.id} onClick={() => console.log(item)}>
            <img src={item?.icon} alt="" className={styles.gridImg} />
            <div className={styles.gridText}>{item?.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.carouselStyle}>
        <Carousel
          autoplay={false}
          infinite
          dotStyle={{
            width: '.06rem',
            height: '.06rem',
            background: '#FFFFFF',
            opacity: 0.4,
          }}
          dotActiveStyle={{
            width: '.24rem',
            height: '.07rem',
            background: '#FFFFFF',
          }}
        >
          {carouselData.map((item) => (
            <img
              key={item?.id}
              src={item?.img}
              alt=""
              className={styles.carouselImg}
              onClick={() => console.log(item)}
            />
          ))}
        </Carousel>
      </div>
      <ListDiallel data={listDiallelData} itemClick={(e) => console.log(e)} />
      <Card
        title="模块标题"
        subTitle={
          <div className={styles.listDiallelSubTitle}>
            {cutDownData.map((item, index) => (
              <React.Fragment key={index}>
                <div className={styles.cutItem}>{item}</div>
                {index !== 2 && <div className={styles.cut}>:</div>}
              </React.Fragment>
            ))}
          </div>
        }
      >
        <ListColumnsWrong data={listColumnsWrongData} itemClick={(e) => console.log(e)} />
      </Card>
      <Card title="模块标题">
        <ListColumn data={listColumnData} itemClick={(e) => console.log(e)} />
      </Card>
      <Card title="模块标题">
        <VedioProduct data={vedioProductData} itemClick={(e) => console.log(e)} />
      </Card>
      <Card
        title="模块标题"
        subTitle={<div className={styles.halfMoneySubTitle}>汇全网尖货 抢半价</div>}
      >
        <HalfMoney data={halfMoneyData} itemClick={(e) => console.log(e)} />
      </Card>
      <WhiteSpace size="xl" />
    </div>
  );
};

export default HomeRetailersPage;
