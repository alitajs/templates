import React, { FC } from 'react';
import { List } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const CourseLargePage: FC<PageProps> = () => {
  return (
    <List className={styles.container}>
      <img src={BgImg} alt="BgImg.png" className={styles.CourseLargeImg}/>
      <span  className={styles.title}>设计模式系统讲解与应用实战篇</span>
      <span  className={styles.introduce}>设计模式系统讲解与应用实战篇</span>
    </List>
  );
};

export default CourseLargePage;
