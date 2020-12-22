/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import { Carousel, SearchBar } from 'antd-mobile';
import {
  ListColumnGroup,
  ListDiallel,
  ModuleList,
  ModuleListDataProps,
  ListDiallelDataProps,
  ListColumnGroupDataProps,
} from '../components';
import styles from './index.less';

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const carouselData = Array.from(new Array(3)).map((item, i) => ({
  id: i,
  img: BgImg,
}));

const moduleData = Array.from(new Array(10)).map((item, i) => ({
  id: i,
  img: BgImg,
  text: '标题文字',
}));

const listDiallelData = Array.from(new Array(4)).map((item, i) => ({
  id: i,
  title: '标题标题标题',
  desc: '描述描述描述',
}));

const data = [
  {
    id: 1,
    img: BgImg,
    title: '轻井泽(文三路店）',
    hotValue: 2,
    account: 163,
    totalAccount: 420,
    type: '西餐',
    place: '文三路',
    tip: '积分兑换',
    distance: 2.6,
  },
  {
    id: 2,
    img: BgImg,
    title: '轻井泽(文三路店）',
    hotValue: 2,
    account: 163,
    totalAccount: 420,
    type: '西餐',
    place: '文三路文三路文三路文三路文三路文三路文三路文三路',
    tip: '积分兑换',
    distance: 2.6,
  },
  {
    id: 3,
    img: BgImg,
    title: '轻井泽(文三路店）',
    hotValue: 2,
    account: 163,
    totalAccount: 420,
    type: '西餐',
    place: '文三路',
    tip: '积分兑换',
    distance: 2.6,
  },
];

const HomeGroupPage: FC<PageProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className={styles.homeGroupStyle}>
      <div className={styles.searchStyle}>
        <div className={styles.addr}>杭州</div>
        <div className={styles.search}>
          <SearchBar
            placeholder="健康理财"
            value={searchValue}
            onChange={(e: string) => setSearchValue(e)}
            onCancel={(e: string) => console.log(e)}
            onSubmit={(e: string) => console.log(e)}
            cancelText="搜索"
          />
        </div>
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
      <ModuleList data={moduleData} onClick={(e: ModuleListDataProps) => console.log(e)} />
      <ListDiallel data={listDiallelData} onClick={(e: ListDiallelDataProps) => console.log(e)} />
      <ListColumnGroup
        data={data}
        title="主标题"
        subTitle="副标题"
        onClick={(e: ListColumnGroupDataProps) => console.log(e)}
      />
    </div>
  );
};

export default HomeGroupPage;
