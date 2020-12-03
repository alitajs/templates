import React, { FC } from 'react';
import { Flex, List, Button } from 'antd-mobile';
import Masonry from 'react-masonry-component';
import styles from './index.less';
import PhooneImg from '../../assets/phone.png';

interface PageProps { }

const { Item } = List;
const { Brief } = Item;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';

const ShopDetailsPage: FC<PageProps> = () => {
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
  return (
    <div className={styles.container}>
      <List className={styles.headerList}>
        <Item extra={<img src={AvatarImg} style={{ width: '1.2rem', height: '1.2rem' }} />}>
          <Flex direction="column" align="start" justify="around">
            <span>Ant Coffee蚂蚁咖啡</span>
            <span>西溪新座店</span>
          </Flex>
          <Brief>餐饮&nbsp;-&nbsp;咖啡馆</Brief>
        </Item>
      </List>
      <div className={styles.listStyle}>
        <List
          renderHeader={
            <div>
              <span className={styles.listMainTitle}>Ant Coffee</span>
              <span className={styles.listSubTitle}>餐饮-咖啡馆</span>
            </div>
          }
        >
          <Item
            thumb={BgImg}
            extra={
              <img
                src={PhooneImg}
                alt="phone.png"
                style={{ width: '0.27rem', height: '0.27rem' }}
              />
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
      </div>
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

export default ShopDetailsPage;
