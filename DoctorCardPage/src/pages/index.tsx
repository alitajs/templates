import React, { FC } from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';
import NailImg from '../../assets/nailImg.png';
import StarImg from '../../assets/starImg.png';

interface PageProps { }
const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';

const DoctorCardPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <img src={NailImg} alt="NailImg.png" className={styles.NailImg} />
      <div className={styles.card}>
        <div className={styles.dotStyleTop}>
          <span>顶级医院</span>
        </div>
        <div className={styles.dotStyleCenter}>
          <span>快速响应</span>
        </div>
        <div className={styles.dotStyleBottom}>
          <span>优质服务</span>
        </div>
        <Flex direction="column" align="center" justify="start">
          <img src={AvatarImg} alt="AvatarImg.png" className={styles.AvatarImg} />
          <Flex style={{ marginBottom: '0.08rem' }}>
            <span className={styles.doctorName}>张豆豆</span>
            <span className={styles.directorDoctor}>主任医生</span>
          </Flex>
          <span className={styles.place}>武汉中市心医院 骨科</span>
        </Flex>
        <div className={styles.dividerLine} />
        <Flex justify="center" align="center" style={{ height: '0.85rem' }}>
          <img src={StarImg} alt="StarImg.png" className={styles.StarImg} />
          <span className={styles.starNum}>4.0</span>
          <span className={styles.comment}>2400条问题，90%好评</span>
        </Flex>
      </div>
    </div>
  );
};

export default DoctorCardPage;
