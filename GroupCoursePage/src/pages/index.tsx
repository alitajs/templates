import React, { FC } from 'react';
import { Flex, List, Grid, Carousel } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const GroupCoursePage: FC<PageProps> = () => {
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
  const listData = [
    {
      id: 1,
      icon: BgImg,
      title: '国宝大师为孩子讲故事',
      introduce: '家庭教育指导再成长之路',
      salePrice: '¥49.9',
      originPrice: '¥60',
    },
    {
      id: 2,
      icon: BgImg,
      title: '培养宝宝好耐心',
      introduce: '家庭教育指导再成长之路',
      salePrice: '免费',
      originPrice: '¥60',
    },
    {
      id: 3,
      icon: BgImg,
      title: '夏天来了，为什么蚊子能找到我',
      introduce: '家庭教育指导再成长之路',
      salePrice: '¥49.9',
      originPrice: '¥60',
    },
    {
      id: 4,
      icon: BgImg,
      title: '国宝大师为孩子讲故事',
      introduce: '家庭教育指导再成长之路',
      salePrice: '¥49.9',
      originPrice: '¥60',
    },
    {
      id: 5,
      icon: BgImg,
      title: '国宝大师为孩子讲故事',
      introduce: '家庭教育指导再成长之路',
      salePrice: '¥49.9',
      originPrice: '¥60',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headerGrid}>
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
        <Grid data={headerGridData} hasLine={false} square={false} columnNum={5} />
      </div>
      <div className={styles.listStyle}>
        <List renderHeader="最新优惠">
          {listData.map((val) => (
            <Item key={val.id} thumb={val.icon}>
              <Flex direction="column" align="start" justify="center">
                <span className={styles.title}>{val.title}</span>
                <span className={styles.introduce}>{val.introduce}</span>
                <Flex
                  className={val.salePrice === '免费' ? styles.freePrice : styles.normal}
                  align="center"
                >
                  <span className={val.salePrice === '免费' ? styles.free : styles.salePrice}>
                    {val.salePrice}
                  </span>
                  <span className={styles.originPrice}>{val.originPrice}</span>
                </Flex>
              </Flex>
            </Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default GroupCoursePage;
