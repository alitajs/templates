import React, { FC } from 'react';
import { SearchBar, Grid, Flex, List, Button, Carousel, WingBlank, Tabs } from 'antd-mobile';
import Masonry from 'react-masonry-component';
import styles from './index.less';

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

interface PageProps {}

const HomeTourismPage: FC<PageProps> = () => {
  const headerGridData = [
    {
      text: '标题文字',
      icon: BgImg,
    },
    {
      text: '标题文字',
      icon: BgImg,
    },
    {
      text: '标题文字',
      icon: BgImg,
    },
    {
      text: '标题五个字',
      icon: BgImg,
    },
    {
      text: '标题文字',
      icon: BgImg,
    },
  ];
  const recommendPlaceData = [
    {
      id: 1,
      icon: BgImg,
      isHot: true,
      peopleNum: '14.5万人',
      distance: '200m',
      placeName: '高岛屋',
      sale: '85',
      instruction: '三天前你浏览过',
    },
    {
      id: 2,
      icon: BgImg,
      isHot: true,
      peopleNum: '14.5万人',
      distance: '200m',
      placeName: '大丸松阪屋',
      sale: '85',
      instruction: '日本必去百货店',
    },
    {
      id: 3,
      icon: BgImg,
      isHot: false,
      peopleNum: '14.5万人',
      distance: '200m',
      placeName: '东武百货',
      sale: '85',
      instruction: '人气最高药妆',
    },
    {
      id: 4,
      icon: BgImg,
      isHot: true,
      peopleNum: '14.5万人',
      distance: '200m',
      placeName: '高岛屋',
      sale: '85',
      instruction: '三天前你浏览过',
    },
    {
      id: 5,
      icon: BgImg,
      isHot: true,
      peopleNum: '14.5万人',
      distance: '200m',
      placeName: '大丸松阪屋',
      sale: '85',
      instruction: '日本必去百货店',
    },
    {
      id: 6,
      icon: BgImg,
      isHot: false,
      peopleNum: '14.5万人',
      distance: '200m',
      placeName: '东武百货',
      sale: '85',
      instruction: '人气最高药妆',
    },
  ];
  const carouselData = ['1', '2', '3'];
  const tabs = [
    { title: '每日精选', id: 1 },
    { title: '选项卡', id: 2 },
    { title: '选项卡', id: 3 },
    { title: '选项卡', id: 4 },
    { title: '选项卡', id: 5 },
    { title: '选项卡', id: 6 },
    { title: '选项卡', id: 7 },
    { title: '选项卡', id: 8 },
  ];
  const tabsData = [
    {
      id: 1,
      title: '东京购物精华日本药妆店便宜必败好物',
      introduce: '文章描述两段: 从日本回来2周整理一下',
      icon: BgImg,
      isExistBtn: false,
      sale: '',
      like: 233,
      collection: '',
      evaluation: '',
      authorName: 'SyrenaCC',
      authorImg: BgImg,
    },
    {
      id: 2,
      title: '银座三越',
      introduce: '',
      icon: BgImg,
      isExistBtn: true,
      sale: '支付立减¥30',
      like: '',
      collection: 233,
      evaluation: '性价比最高',
      authorImg: '',
    },
    {
      id: 3,
      title: 'KojimaXBic  Camera(昭岛购物)',
      introduce: '',
      icon: BgImg,
      isExistBtn: false,
      sale: '',
      like: '',
      collection: 233,
      evaluation: '性价比最高',
      authorImg: '',
    },
    {
      id: 4,
      title: '银座三越',
      introduce: '',
      icon: BgImg,
      isExistBtn: true,
      sale: '支付立减¥30',
      like: '',
      collection: 233,
      evaluation: '性价比最高',
      authorImg: '',
    },
  ];
  const lstItem = (val: any) => {
    return (
      <div key={val.id} className={styles.waterfall}>
        <img src={val.icon} alt="" className={styles.goodsImg} />
        <Flex justify="around">
          <Flex.Item>
            <Button className={val.isExistBtn ? '' : styles.isShowBtn}>使用</Button>
            <span className={styles.title}>{val.title}</span>
            <span className={val.sale ? styles.sale : styles.isShowSale}>{val.sale}</span>
            <span className={val.introduce ? styles.introduce : styles.isShowIntroduce}>
              {val.introduce}
            </span>
          </Flex.Item>
        </Flex>
        <Flex className={styles.tabBottomInfo}>
          <img
            src={val.authorImg}
            alt=""
            className={val.authorImg ? styles.authorImg : styles.isShowAuthorImg}
          />
          <span className={val.authorName ? styles.tabBottomBorderLeft : styles.isShowAuthorName}>
            {val.authorName}
          </span>
          <span className={val.collection ? styles.tabBottomBorderLeft : styles.isShowCollection}>
            {val.collection}个收藏
          </span>
          <span className={val.like ? styles.tabBottomBorderRight : styles.isShowLike}>
            {val.like}喜欢
          </span>
          <span className={styles.tabBottomBorderRight}>{val.evaluation}</span>
        </Flex>
        <div></div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerSearch}>
        <SearchBar placeholder="搜索词" />
      </div>
      <div className={styles.headerBanner}>
        <img src={BgImg} alt="" />
      </div>
      <div className={styles.headerGrid}>
        <Grid data={headerGridData} hasLine={false} square={false} columnNum={5} />
      </div>
      <Flex style={{ margin: 'auto 0.24rem' }}>
        <Flex.Item className={styles.headerFlexItem}>
          <span>标题标题标题</span>
          <span>描述描述描述</span>
        </Flex.Item>
        <Flex.Item className={styles.headerFlexItem}>
          <span>标题标题标题</span>
          <span>描述描述描述</span>
        </Flex.Item>
      </Flex>
      <List
        renderHeader={
          <List>
            <Item arrow="horizontal">
              <span className={styles.listHeaderTitle}>模块标题</span>
              <span className={styles.listHeadersale}>
                提前领&nbsp;最高多<span>省&yen;50</span>
              </span>
            </Item>
          </List>
        }
        className={styles.recommendPlaceList}
      >
        <Item>
          <Flex justify="around" direction="row">
            {recommendPlaceData.slice(0, 3).map((val) => (
              <Flex.Item className={styles.recommendPlace} key={val.id}>
                <div className={styles.listItemStyle}>
                  <img src={val.icon} alt="" />
                  <span className={val.isHot ? styles.hot : styles.hiddenHot}>
                    {val.isHot && '热卖'}
                  </span>
                  <div className={styles.introduce}>
                    <span className={styles.peopleNum}>{val.peopleNum}已领</span>
                    <span className={styles.distance}>&lt;{val.distance}</span>
                  </div>
                  <span className={styles.placeName}>{val.placeName}</span>
                  <div className={styles.saleItem}>
                    <span className={styles.saleNum}>{val.sale}</span>
                    <span className={styles.sale}>折</span>
                  </div>
                  <span className={styles.instruction}>{val.instruction}</span>
                  <Flex justify="center">
                    <Button>使用</Button>
                  </Flex>
                </div>
              </Flex.Item>
            ))}
          </Flex>
        </Item>
        <Item>
          <Flex justify="around" direction="row">
            {recommendPlaceData.slice(3, 6).map((val) => (
              <Flex.Item className={styles.recommendPlace} key={val.id}>
                <div className={styles.listItemStyle}>
                  <span className={val.isHot ? styles.hot : styles.hiddenHot}>
                    {val.isHot && '热卖'}
                  </span>
                  <img src={val.icon} alt="" />
                  <div className={styles.introduce}>
                    <span className={styles.peopleNum}>{val.peopleNum}已领</span>
                    <span className={styles.distance}>&lt;{val.distance}</span>
                  </div>
                  <span className={styles.placeName}>{val.placeName}</span>
                  <div className={styles.saleItem}>
                    <span className={styles.saleNum}>{val.sale}</span>
                    <span className={styles.sale}>折</span>
                  </div>
                  <span className={styles.instruction}>{val.instruction}</span>
                  <Flex justify="center">
                    <Button>使用</Button>
                  </Flex>
                </div>
              </Flex.Item>
            ))}
          </Flex>
        </Item>
      </List>
      <WingBlank style={{ margin: 'auto 24px' }} className={styles.carousel}>
        <Carousel
          autoplay={false}
          infinite
          style={{ touchAction: 'none' }}
          dotStyle={{
            background: '#FFFFFF',
          }}
        >
          {carouselData.map((val) => (
            <a key={val} style={{ display: 'inline-block', width: '100%', height: '2rem' }}>
              <img
                src={BgImg}
                alt=""
                style={{
                  width: '100%',
                  verticalAlign: 'top',
                  height: '200px',
                  borderRadius: '0.16rem',
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <div className={styles.tabsStyle}>
        <Tabs tabs={tabs}  tabBarUnderlineStyle={{ height: '0.04rem', backgroundColor: '#1677FF' }} renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={5} />}>
          <Masonry
            elementType={'div'}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            style={{ margin: '0.24rem 0.16rem 0.16rem 0.16rem' }}
          >
            {tabsData.map(lstItem)}
          </Masonry>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeTourismPage;
