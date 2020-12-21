import React, { FC } from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const HospitalSelectPage: FC<PageProps> = () => {
  return (
    <Flex align="center" justify="center" className={styles.container}>
      <Flex justify="between" align="center" style={{ height: '100%', width: '100%' }}>
        <Flex direction="column" justify="center" className={styles.leftContent}>
          <span className={styles.title}>北京中日友好医院</span>
          <span className={styles.introduce}>内分泌科/营养科</span>
          <span className={styles.specificationLeft}>三甲 综合</span>
        </Flex>
        <Flex direction="column" justify="center" className={styles.rightContent}>
          <span className={styles.title}>北京中日友好医院</span>
          <span className={styles.introduce}>内分泌科/营养科</span>
          <span className={styles.specificationRight}>三甲 综合</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HospitalSelectPage;
