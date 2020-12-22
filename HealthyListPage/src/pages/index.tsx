import React, { FC } from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';
import TriangleImg from '../../assets/triangleImg.png';

interface PageProps { }
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const HealthyListPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <Flex>
        <Flex.Item className={styles.flexItem} style={{ backgroundColor: '#F8F7F6' }}>
          <Flex align="start">
            <img src={BgImg} alt="" className={styles.bgImg} />
            <Flex direction="column" align="start" justify="start">
              <Flex justify="center">
                <span className={styles.title}>育儿</span>
                <img src={TriangleImg} alt="triangleImg.png" className={styles.triangleImg} />
              </Flex>
              <span className={styles.userNum}>4800万人在用</span>
            </Flex>
          </Flex>
          <span className={styles.time}>哺乳期还有200天</span>
        </Flex.Item>
        <Flex.Item className={styles.flexItem} style={{ backgroundColor: '#F4F6F8' }}>
          <Flex align="start">
            <img src={BgImg} alt="" className={styles.bgImg} />
            <Flex direction="column" align="start" justify="start">
              <Flex justify="center">
                <span className={styles.title}>药箱</span>
                <img src={TriangleImg} alt="triangleImg.png" className={styles.triangleImg} />
              </Flex>
              <span className={styles.userNum}>3600万人在用</span>
            </Flex>
          </Flex>
          <span className={styles.time}>哺乳期还有200天</span>
        </Flex.Item>
      </Flex>
      <Flex>
        <Flex.Item className={styles.flexItem} style={{ backgroundColor: '#F8F6F7' }}>
          <Flex align="start">
            <img src={BgImg} alt="" className={styles.bgImg} />
            <Flex direction="column" align="start" justify="start">
              <Flex justify="center">
                <span className={styles.title}>孕期</span>
                <img src={TriangleImg} alt="triangleImg.png" className={styles.triangleImg} />
              </Flex>
              <span className={styles.userNum}>4800万人在用</span>
            </Flex>
          </Flex>
          <span className={styles.time}>预产期还有200天</span>
        </Flex.Item>
        <Flex.Item className={styles.flexItem} style={{ backgroundColor: '#F7F8F5' }}>
          <Flex align="start">
            <img src={BgImg} alt="" className={styles.bgImg} />
            <Flex direction="column" align="start" justify="start">
              <Flex justify="center">
                <span className={styles.title}>减重</span>
                <img src={TriangleImg} alt="triangleImg.png" className={styles.triangleImg} />
              </Flex>
              <span className={styles.userNum}>4800万人在用</span>
            </Flex>
          </Flex>
          <span className={styles.time}>预产期还有200天</span>
        </Flex.Item>
      </Flex>
      <Flex>
        <Flex.Item className={styles.flexItem} style={{ backgroundColor: '#F8F7F3' }}>
          <Flex align="start">
            <img src={BgImg} alt="" className={styles.bgImg} />
            <Flex direction="column" align="start" justify="start">
              <Flex justify="center">
                <span className={styles.title}>养生</span>
                <img src={TriangleImg} alt="triangleImg.png" className={styles.triangleImg} />
              </Flex>
              <span className={styles.userNum}>4800万人在用</span>
            </Flex>
          </Flex>
          <span className={styles.time}>预产期还有200天</span>
        </Flex.Item>
        <Flex.Item className={styles.flexItem} style={{ backgroundColor: '#F9F6F5' }}>
          <Flex align="start">
            <img src={BgImg} alt="" className={styles.bgImg} />
            <Flex direction="column" align="start" justify="start">
              <Flex justify="center">
                <span className={styles.title}>经期</span>
                <img src={TriangleImg} alt="triangleImg.png" className={styles.triangleImg} />
              </Flex>
              <span className={styles.userNum}>4800万人在用</span>
            </Flex>
          </Flex>
          <span className={styles.time}>预产期还有200天</span>
        </Flex.Item>
      </Flex>
    </div>
  );
};

export default HealthyListPage;
