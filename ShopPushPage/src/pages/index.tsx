import React, { FC } from 'react';
import { Flex, List, Grid, Carousel, Button } from 'antd-mobile';

import styles from './index.less';

interface PageProps {}

const { Item } = List;
const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const ShopPushPage: FC<PageProps> = () => {
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
  const carouselData = [1, 2, 3];
  const imgList = [1, 2, 3, 4, 5];
  const listData = [
    {
      id: 1,
      content: '外币专家最新活动详情都在这里全面解析解析',
      icon: BgImg,
    },
    {
      id: 2,
      content: '多一份金融了解，多一份财富保障和关爱',
      icon: BgImg,
    },
    {
      id: 3,
      content: '子女教育金融规划',
      icon: BgImg,
    },
  ];
  return (
    <div className={styles.container}>
      <List className={styles.headerList}>
        <Item thumb={AvatarImg} arrow="horizontal">
          <Flex align="start" direction="column">
            <span className={styles.title}>用户名称</span>
            <span className={styles.introduce}>描述描述描述</span>
          </Flex>
        </Item>
      </List>
      <div className={styles.headerGrid}>
        <Grid data={headerGridData} hasLine={false} square={false} columnNum={5} />
      </div>
      <div className={styles.carousel}>
        <Carousel
          autoplay={false}
          infinite
          style={{ touchAction: 'none' }}
          dotStyle={{
            background: '#FFFFFF',
            width: '0.06rem',
            height: '0.06rem',
            opacity: 0.4,
            marginBottom: '0.19rem',
          }}
          dotActiveStyle={{ width: '0.06rem', height: '0.06rem', marginBottom: '0.19rem' }}
        >
          {carouselData.map((val) => (
            <a key={val} style={{ display: 'inline-block', width: '100%', height: '2rem' }}>
              <img
                src={BgImg}
                alt=""
                style={{
                  width: '100%',
                  verticalAlign: 'top',
                  height: '2rem',
                  borderRadius: '0.16rem',
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
      <List
        renderHeader={
          <Flex direction="column" align="start" justify="end" style={{ position: 'relative' }}>
            <span className={styles.listTitle}>积分俱乐部好礼相送</span>
            <img
              src={BgImg}
              alt="BgImg.png"
              style={{
                height: '2.96rem',
                width: '100%',
                borderBottom: '0.01rem solid #FFFFFF',
              }}
            />
            <div className={styles.triangle}></div>
          </Flex>
        }
        className={styles.listStyle}
      >
        <Item>
          <Flex justify="between">
            {imgList.map((val) => (
              <img
                key={val}
                src={BgImg}
                alt="BgImg.png"
                style={{ width: '1.12rem', height: '1.12rem', borderRadius: '0.08rem' }}
              />
            ))}
          </Flex>
        </Item>
        <Item arrow="horizontal" className={styles.checkDetail}>
          查看详情
        </Item>
      </List>
      <List
        renderHeader={
          <Flex align="stretch">
            <img
              src={BgImg}
              alt="BgImg.png"
              style={{
                height: '3.6rem',
                width: '100%',
                borderBottom: '0.01rem solid #FFFFFF',
              }}
            />
          </Flex>
        }
        className={styles.listStyle}
      >
        <Item>
          <Flex justify="between" direction="column" align="start">
            <span className={styles.articleTile}>多币种灵活组合，助您优化资产</span>
            <span className={styles.articleIntroduce}>
              三大包装类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
            </span>
            <div>
              <span className={styles.babelStyle}>标签</span>
              <span className={styles.articleOrigin}>文章来源</span>
            </div>
          </Flex>
        </Item>
        <Item arrow="horizontal" className={styles.checkDetail}>
          阅读全文
        </Item>
      </List>
      <List
        renderHeader={
          <Flex align="stretch">
            <img
              src={BgImg}
              alt="BgImg.png"
              style={{
                height: '3.6rem',
                width: '100%',
                borderBottom: '0.01rem solid #FFFFFF',
              }}
            />
          </Flex>
        }
        className={styles.listStyle}
      >
        <Item>
          <Flex justify="between" direction="column" align="start">
            <span className={styles.articleTile}>多币种灵活组合，助您优化资产</span>
            <span className={styles.articleIntroduce}>
              三大包装类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
            </span>
          </Flex>
        </Item>
        <Item className={styles.btnStyle}>
          <Flex>
            <Button className={styles.read}>阅读全文</Button>
            <Button className={styles.repay}>立即还款</Button>
          </Flex>
        </Item>
      </List>
      <List
        renderHeader={
          <Flex align="stretch" style={{ position: 'relative' }}>
            <img
              src={BgImg}
              alt="BgImg.png"
              style={{
                height: '3.6rem',
                width: '100%',
                borderBottom: '0.01rem solid #FFFFFF',
              }}
            />
            <span className={styles.newsIntroduce}>多币种灵活组合，助您优化资产</span>
          </Flex>
        }
        className={styles.listStyle}
      >
        {listData.map((val) => (
          <Item
            key={val.id}
            extra={
              <img
                src={val.icon}
                alt="BgImg.png"
                style={{ width: '0.8rem', height: '0.8rem', borderRadius: '0.08rem' }}
              />
            }
            className={styles.newsList}
          >
            {val.content}
          </Item>
        ))}
      </List>
      <List
        renderHeader={
          <Flex align="stretch">
            <img
              src={BgImg}
              alt="BgImg.png"
              style={{
                height: '3.6rem',
                width: '100%',
                borderBottom: '0.01rem solid #FFFFFF',
              }}
            />
          </Flex>
        }
        className={styles.listStyle}
      >
        <Item>
          <Flex justify="between" direction="column" align="start">
            <span className={styles.articleTile}>多币种灵活组合，助您优化资产</span>
            <span className={styles.articleIntroduce}>
              三大包装类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
            </span>
          </Flex>
        </Item>
        <Item arrow="horizontal" className={styles.checkDetail}>
          阅读全文
        </Item>
      </List>
      <List className={styles.listStyle}>
        <Item>
          <Flex justify="between" direction="column" align="start">
            <span className={styles.titleDigest}>
              内容标题摘要标题标题摘要标题摘要标题摘要标题标题摘要标题摘要
            </span>
            <span className={styles.introduceDigest}>
              内容标题摘要标题标题摘要标题摘要内容标题摘要标题标题摘要标题摘要内容标题摘要标题标题摘要标题摘要内容标题摘要标题标题摘要标题摘要
            </span>
            <div>
              <span className={styles.babelStyle}>标签</span>
              <span className={styles.articleOrigin}>文章来源</span>
            </div>
          </Flex>
        </Item>
        <Item arrow="horizontal" className={styles.checkDetail}>
          阅读全文
        </Item>
      </List>
    </div>
  );
};

export default ShopPushPage;
