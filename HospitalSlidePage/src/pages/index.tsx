import React, { FC } from 'react';
import styles from './index.less';

interface PageProps { }
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const HospitalSlidePage: FC<PageProps> = () => {
  const list = [
    {
      id: 1,
      icon: BgImg,
      HospitalName: '北京协和医院',
      treatmentContent: '内分泌科/骨科',
    },
    {
      id: 2,
      icon: BgImg,
      HospitalName: '武汉市中心医院',
      treatmentContent: '妇产科/儿科',
    },
    {
      id: 3,
      icon: BgImg,
      HospitalName: '中日友好医院',
      treatmentContent: '内分泌科/男科',
    },
    {
      id: 4,
      icon: BgImg,
      HospitalName: '中日友好医院',
      treatmentContent: '内分泌科/男科',
    },
    {
      id: 5,
      icon: BgImg,
      HospitalName: '中日友好医院',
      treatmentContent: '内分泌科/男科',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.flexStyle}>
        {list.map((val) => (
          <div key={val.id} className={styles.flexItemStyle}>
            <img src={val.icon} alt="BgImg.png" className={styles.bgImg} />
            <span className={styles.HospitalName}>{val.HospitalName}</span>
            <span className={styles.treatmentContent}>{val.treatmentContent}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalSlidePage;
