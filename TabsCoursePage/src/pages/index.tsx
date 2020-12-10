import React, { FC } from 'react';
import { Tabs, Carousel, List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const TabsCoursePage: FC<PageProps> = () => {
  const carouselData = [1, 2, 3];
  const tabs = [
    { title: '选项卡', id: '1' },
    { title: '选项卡', id: '2' },
    { title: '选项卡', id: '3' },
    { title: '选项卡', id: '4' },
  ];
  const listData = [
    {
      id: 1,
      icon: BgImg,
      title: '深度实践核心技术篇',
      type: 'video',
    },
    {
      id: 2,
      icon: BgImg,
      title: '设计模式系统讲解与应用实战篇',
      type: '',
    },
    {
      id: 3,
      icon: BgImg,
      title: '深度实践核心技术篇',
      type: 'video',
    },
    {
      id: 4,
      icon: BgImg,
      title: '设计模式系统讲解与应用实战篇',
      type: '',
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
      <Tabs
        tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => {
          console.log('onChange', index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log('onTabClick', index, tab);
        }}
      >
        <div className={styles.flexStyle}>
          <Flex wrap="wrap">
            {listData.map((val) => (
              <div key={val.id} className={styles.flexItem}>
                <img src={val.icon} alt="BgImg.png" className={styles.flexIcon} />
                <span className={val.type === 'video' ? styles.typeLabel : styles.hiddenLabel}>
                  {val.type === 'video' ? '视频' : ''}
                </span>
                <span className={styles.flexTitle}>{val.title}</span>
              </div>
            ))}
          </Flex>
          <List className={styles.listStyle}>
            <img src={BgImg} alt="BgImg.png" className={styles.CourseLargeImg}/>
            <span  className={styles.title}>设计模式系统讲解与应用实战篇</span>
            <span  className={styles.introduce}>设计模式系统讲解与应用实战篇</span>
            </List>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsCoursePage;
