import React, { FC } from 'react';
import { Carousel, Grid, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const data = [
  {
    icon: BgImg,
    text: {
      title: '婴幼儿教育',
      introduce: '描述信息最多一行',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '中小学教育',
      introduce: '描述信息',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '高等教育',
      introduce: '描述信息',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '出国留学',
      introduce: '描述信息',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '管理培训',
      introduce: '描述信息',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '文学艺术',
      introduce: '描述信息',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '标题文字',
      introduce: '',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '标题文字',
      introduce: '',
    },
  },
  {
    icon: BgImg,
    text: {
      title: '标题文字',
      introduce: '',
    },
  },
];
const ClassCoursePage: FC<PageProps> = () => {
  const carouselData = [1, 2, 3];
  return (
    <div className={styles.container}>
      <div className={styles.carouselStyle}>
        <Carousel
          autoplay={false}
          infinite
          style={{ touchAction: 'none' }}
          dotStyle={{
            background: '#FFFFFF',
            width: '0.06rem',
            height: '0.06rem',
            opacity: 0.4,
            marginBottom: '0.1rem',
          }}
          dotActiveStyle={{ width: '0.06rem', height: '0.06rem', marginBottom: '0.1rem' }}
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
      <div className={styles.gridStyle}>
        <Grid
          data={data}
          columnNum={3}
          hasLine={false}
          square={false}
          itemStyle={{ height: 'auto' }}
          renderItem={(dataItem) => (
            <Flex direction="column">
              <img src={dataItem?.icon} alt="BgImg.png" className={styles.gridImg} />
              <span className={styles.title}>{dataItem?.text.title}</span>
              <span
                className={dataItem?.text.introduce ? styles.introduce : styles.hiddenIntroduce}
              >
                {dataItem?.text.introduce}
              </span>
            </Flex>
          )}
        />
      </div>
    </div>
  );
};

export default ClassCoursePage;
