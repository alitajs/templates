import React, { FC } from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';
import StarImg from '../../assets/starImg.png';

interface PageProps { }
const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';

const DoctorSlidePage: FC<PageProps> = () => {
  const list = [
    {
      id: 1,
      icon: AvatarImg,
      name: '张豆豆',
      position: '主任医生',
      hospitalName: '北京中日友好医院',
      starImg: StarImg,
      starNum: '4.0',
      praise: '90%好评',
    },
    {
      id: 2,
      icon: AvatarImg,
      name: '张豆豆',
      position: '主任医生',
      hospitalName: '北京中日友好医院',
      starImg: StarImg,
      starNum: '4.0',
      praise: '90%好评',
    },
    {
      id: 3,
      icon: AvatarImg,
      name: '张豆豆',
      position: '主任医生',
      hospitalName: '北京中日友好医院',
      starImg: StarImg,
      starNum: '4.0',
      praise: '90%好评',
    },
    {
      id: 4,
      icon: AvatarImg,
      name: '张豆豆',
      position: '主任医生',
      hospitalName: '北京中日友好医院',
      starImg: StarImg,
      starNum: '4.0',
      praise: '90%好评',
    },
    {
      id: 5,
      icon: AvatarImg,
      name: '张豆豆',
      position: '主任医生',
      hospitalName: '北京中日友好医院',
      starImg: StarImg,
      starNum: '4.0',
      praise: '90%好评',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.flexStyle}>
        {list.map((val) => (
          <div key={val.id} className={styles.flexItemStyle}>
            <img src={val.icon} alt="AvatarImg.png" className={styles.avatarImg} />
            <Flex>
              <span className={styles.name}>{val.name}</span>
              <span className={styles.position}>{val.position}</span>
            </Flex>
            <span className={styles.hospitalName}>{val.hospitalName}</span>
            <Flex>
              <img src={val.starImg} alt="starImg.png" className={styles.starImg} />
              <span className={styles.starNum}>{val.starNum}</span>
              <span className={styles.praise}>{val.praise}</span>
            </Flex>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSlidePage;
