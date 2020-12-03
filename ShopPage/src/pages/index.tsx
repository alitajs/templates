import React, { FC } from 'react';
import {Flex, List, Button } from 'antd-mobile';
import Masonry from 'react-masonry-component';
import styles from './index.less';
import PhooneImg from '../../assets/phone.png';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const ShopPage: FC<PageProps> = () => {
  const lstItem = (val: any) => {
    return (
      <div key={val.id} className={styles.waterfall}>
        <img
          src={val.icon}
          alt=""
          className={styles.goodsImg}
          style={{ width: '100%', height: `${val.height}px`, borderRadius: '8px' }}
        />
        <span className={styles.businessIntroduceTitle}>店内环境</span>
      </div>
    );
  };
  const businessShowData = [
    {
      id: 1,
      icon: BgImg,
      height: 320,
    },
    {
      id: 2,
      icon: BgImg,
      height: 266,
    },
    {
      id: 3,
      icon: BgImg,
      height: 320,
    },
    {
      id: 4,
      icon: BgImg,
      height: 266,
    },
    {
      id: 5,
      icon: BgImg,
      height: 266,
    },
    {
      id: 6,
      icon: BgImg,
      height: 320,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headerBanner}>
        <img src={BgImg} alt="" />
        <span className={styles.headerBannerNum}>64门店照片</span>
      </div>
      <div className={styles.headerBackGround} />
      <List
        renderHeader={
          <div>
            <span className={styles.listMainTitle}>Ant Coffee</span>
            <span className={styles.listSubTitle}>餐饮-咖啡馆</span>
          </div>
        }
        className={styles.listStyle}
      >
        <Item
          thumb={BgImg}
          extra={
            <img src={PhooneImg} alt="phone.png" style={{ width: '0.27rem', height: '0.27rem' }} />
          }
        >
          西湖区西溪路蚂蚁金服552-1号
        </Item>
        <Item thumb={BgImg} extra="门店简介" arrow="horizontal">
          9:00~22:00营业
        </Item>
        <Item thumb={BgImg} extra="免费快递" arrow="horizontal">
          快递
        </Item>
        <Item thumb={BgImg} extra="25人使用" arrow="horizontal">
          开发票
        </Item>
      </List>
      <span className={styles.businessShowTitle}>经营展示</span>
      <Masonry
        elementType={'div'}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        style={{ margin: 'auto 0.16rem  0.16rem  0.16rem' }}
      >
        {businessShowData.map(lstItem)}
      </Masonry>
      <Flex className={styles.isBottom}>
        <Flex.Item>一&nbsp;没有更多照片了&nbsp;一 </Flex.Item>
      </Flex>
      <div className={styles.payBtn}>
        <Button>付款</Button>
      </div>
    </div>
  );
};

export default ShopPage;
