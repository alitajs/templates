import React, { FC } from 'react';
import { List, Tabs, Flex } from 'antd-mobile';
import styles from './index.less';
import AddImg from '../../assets/addImg.png';

interface PageProps { }
const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const InfoSlideListPage: FC<PageProps> = () => {
  const tabs = [
    {
      id: 1,
      title: '推荐',
    },
    {
      id: 2,
      title: '关注',
    },
    {
      id: 3,
      title: '生活',
    },
    {
      id: 4,
      title: '财富',
    },
    {
      id: 5,
      title: '发现',
    },
    {
      id: 6,
      title: '推荐',
    },
  ];
  const listData = [
    {
      id: 1,
      icon: BgImg,
      headerTitle: '支付宝',
      titleLeft: '支付宝情报局',
      introduceLeft: '壹贰叁肆伍陆柒捌玖拾壹贰叁....',
      titleRight: '小码答',
      introduceRight: '手握医保神器，却',
    },
    {
      id: 2,
      icon: BgImg,
      headerTitle: '兴趣',
      titleLeft: '贺岁避雷针',
      introduceLeft: '壹贰叁肆伍陆柒捌玖拾壹贰叁....',
      titleRight: '2018，春运来',
      introduceRight: '手握医保神器，却',
    },
    {
      id: 3,
      icon: BgImg,
      headerTitle: '热点',
      titleLeft: '贺岁避雷针',
      introduceLeft: '壹贰叁肆伍陆柒捌玖拾壹贰叁....',
      titleRight: '2018，春运来',
      introduceRight: '手握医保神器，却',
    },
    {
      id: 4,
      icon: BgImg,
      headerTitle: '兴趣',
      titleLeft: '车主服务',
      introduceLeft: '看看那些月入3000，年存5万的...',
      titleRight: '生活省钱一点通',
      introduceRight: '手握医保神器却不',
    },
    {
      id: 5,
      icon: BgImg,
      headerTitle: '热点',
      titleLeft: '我的客服-为您支招',
      introduceLeft: '看看那些月入3000，年存5万的...',
      titleRight: '芝麻分提升攻略',
      introduceRight: '手握医保神器却不',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.addImg}>
        <img src={AddImg} alt="AddImg.png" />
      </div>
      <Tabs
        tabs={tabs}
        distanceToChangeTab={0.8}
        destroyInactiveTab={true}
        onChange={(tab, index) => {
          console.log('onChange', index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log('onTabClick', index, tab);
        }}
      >
        <List>
          {listData.map((val) => (
            <Item arrow="horizontal" key={val.id}>
              <Flex align="center">
                <img src={val.icon} alt="BgImg.png" className={styles.headerImg} />
                <span className={styles.headerTitle}>{val.headerTitle}</span>
              </Flex>
              <div>
                <Flex className={styles.newsContent}>
                  <Flex direction="column" align="start" className={styles.newsLeftContent}>
                    <img src={val.icon} alt="BgImg.png" className={styles.leftImg} />
                    <span className={styles.title}>{val.titleLeft}</span>
                    <span className={styles.introduce}>{val.introduceLeft}</span>
                  </Flex>
                  <Flex direction="column" align="start" className={styles.newsRightContent}>
                    <img src={val.icon} alt="BgImg.png" className={styles.rightImg} />
                    <span className={styles.title}>{val.titleRight}</span>
                    <span className={styles.introduce}>{val.introduceRight}</span>
                  </Flex>
                </Flex>
              </div>
            </Item>
          ))}
        </List>
      </Tabs>
      <div className={styles.footer}>——————— 蚂上看，知生活 ———————</div>
    </div>
  );
};

export default InfoSlideListPage;
