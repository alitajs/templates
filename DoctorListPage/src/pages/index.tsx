import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }
const { Item } = List;
const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';

const DoctorListPage: FC<PageProps> = () => {
  return (
    <List className={styles.ListStyle}>
      <Item thumb={AvatarImg}>
        <Flex direction="column" align="start">
          <Flex style={{ marginBottom: '0.08rem' }}>
            <span className={styles.doctorName}>张豆豆</span>
            <span className={styles.doctorIdentity}>主任医生</span>
          </Flex>
          <span className={styles.place}>北京协和医院 骨科</span>
          <span className={styles.treatmentContent}>擅长: 儿童及成人内分泌疾病, 甲状腺疾病</span>
        </Flex>
      </Item>
    </List>
  );
};

export default DoctorListPage;
