import React, { FC } from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';
import NailImg from '../../assets/nailImg.png';
import PhoneImg from '../../assets/phoneImg.png';
import PlaceImg from '../../assets/placeImg.png';
import InfoImg from '../../assets/infoImg.png';

interface PageProps {}
const AvatarImg =
  'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';

const HospitolCardPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <img src={NailImg} alt="NailImg.png" className={styles.NailImg} />
      <div className={styles.card}>
        <div className={styles.dotStyleTop}>
          <span>三甲医院</span>
        </div>
        <div className={styles.dotStyleBottom}>
          <span>综合医院</span>
        </div>
        <Flex direction="column" align="center" justify="start">
          <img src={AvatarImg} alt="AvatarImg.png" className={styles.AvatarImg} />
          <Flex style={{ marginBottom: '0.08rem' }}>
            <span className={styles.hospitalName}>浙大附属第一互联网医院</span>
          </Flex>
          <span className={styles.treatmentContent}>特色: 内分泌专科 妇科 心脑血管</span>
        </Flex>
        <div className={styles.dividerLine} />
        <Flex justify="around" style={{ height: '0.96rem' }}>
          <Flex.Item>
            <Flex>
              <div className={styles.PlaceImgBg}>
                <img src={PlaceImg} alt="PlaceImg.png" className={styles.PlaceImg} />
              </div>
              <span className={styles.labelText}>医院位置</span>
            </Flex>
          </Flex.Item>
          <Flex.Item>
            <Flex>
              <div className={styles.PhoneImgBg}>
                <img src={PhoneImg} alt="PhoneImg.png" className={styles.PhoneImg} />
              </div>
              <span className={styles.labelText}>联系电话</span>
            </Flex>
          </Flex.Item>
          <Flex.Item>
            <Flex>
              <div className={styles.InfoImgBg}>
                <img src={InfoImg} alt="InfoImg.png" className={styles.InfoImg} />
              </div>
              <span className={styles.labelText}>医院概况</span>
            </Flex>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  );
};

export default HospitolCardPage;
