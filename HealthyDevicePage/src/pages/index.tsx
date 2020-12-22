import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';
import AddImg from '../../assets/addImg.png';
import CombinedImg from '../../assets/combinedImg.png';

interface PageProps { }
const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const HealthyDevicePage: FC<PageProps> = () => {
  return (
    <List className={styles.listStyle}>
      <Item thumb={<img src={BgImg} alt="BgImg.png" className={styles.bgImg} />}>
        <Flex justify="between">
          <Flex direction="column" align="start">
            <span className={styles.title}>步数</span>
            <span className={styles.introduce}>今天09:00, iphone同步</span>
          </Flex>
          <span className={styles.exponent}>28008</span>
        </Flex>
      </Item>
      <Item thumb={<img src={BgImg} alt="BgImg.png" className={styles.bgImg} />}>
        <Flex justify="between">
          <Flex direction="column" align="start">
            <span className={styles.title}>血糖mmol/L</span>
            <span className={styles.introduce}>今天09:00, 鱼跃360同步</span>
          </Flex>
          <Flex align="center">
            <img src={CombinedImg} alt="CombinedImg.png" className={styles.combinedImg} />
            <span className={styles.exponent}>7.8</span>
          </Flex>
        </Flex>
      </Item>
      <Item
        thumb={
          <Flex align="center" justify="center">
            <img src={BgImg} alt="BgImg.png" className={styles.BgImg} />
            <img src={AddImg} alt="AddImg.png" className={styles.AddImg} />
          </Flex>
        }
        onClick={() => {
          console.log('点击事件');
        }}
      >
        <Flex justify="between" direction="column" align="start">
          <span className={styles.title}>添加更多健康数据</span>
          <span className={styles.introduce}>绑定智能设备管理健康</span>
        </Flex>
      </Item>
    </List>
  );
};

export default HealthyDevicePage;
