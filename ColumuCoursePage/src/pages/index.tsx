import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const ColumuCoursePage: FC<PageProps> = () => {
  const data = [
    {
      id: 1,
      title: '美术教育',
      content: '想象力培养激发',
    },
    {
      id: 2,
      title: '音乐教育',
      content: '想象力培养激发',
    },
    {
      id: 3,
      title: '文学教育',
      content: '想象力培养激发',
    },
    {
      id: 4,
      title: '德育教育',
      content: '想象力培养激发',
    },
  ];
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
      <div className={styles.headerBanner}>
        <img src={BgImg} alt="BgImg.png" />
      </div>
      <div className={styles.headerBackGround} />
      <List renderHeader="精品课程" className={styles.listStyle}>
        <Item>
          <Flex wrap="wrap">
            {data.map((val) => (
              <div key={val.id} className={styles.courseItem}>
                <span className={styles.courseTitle}>{val.title}</span>
                <span className={styles.courseContent}>{val.content}</span>
              </div>
            ))}
          </Flex>
        </Item>
      </List>
      <div className={styles.preferentialCourseStyle}>
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

export default ColumuCoursePage;
