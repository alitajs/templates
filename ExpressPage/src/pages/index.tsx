import React, { FC } from 'react';
import styles from './index.less';
import { Flex } from 'antd-mobile';

interface PageProps {}

const AvatarImg =
  'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';
const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const ExpressPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Flex direction="column" align="center" justify="center">
          <img src={AvatarImg} alt="" className={styles.headerImg} />
          <span className={styles.headerTitle}>小程序名称</span>
        </Flex>
      </div>
      <div className={styles.service}>
      <Flex >
        <Flex.Item>
          <Flex>
            <img src={BgImg} alt="" className={styles.serviceImg} />
            <div>
              <span className={styles.headerTitle}>寄快递</span>
              <span className={styles.headerIntroduce}>一键寄件上门取</span>
            </div>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <Flex>
            <img src={BgImg} alt="" className={styles.serviceImg} style={{marginLeft:'0.16rem'}} />
            <div>
              <span className={styles.headerTitle}>查快递</span>
              <span className={styles.headerIntroduce}>快递物流跟踪</span>
            </div>
          </Flex>
        </Flex.Item>
      </Flex>
      </div>
    </div>
  );
};

export default ExpressPage;
