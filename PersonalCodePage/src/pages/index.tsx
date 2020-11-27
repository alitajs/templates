import React, { FC } from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';

const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

interface PageProps { }

const PersonalCodePage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <img src={AvatarImg} alt="" className={styles.AvatarImgStyle} />
      <Flex direction="column" className={styles.collection}>
        <span>用户名称</span>
        <span>用户描述描述描述</span>
        <img src={BgImg} alt="" style={{ width: '3.6rem', height: '3.6rem' }} />
        <span>用支付宝扫二维码,&nbsp;加我好友</span>
      </Flex>
    </div>
  );
};

export default PersonalCodePage;
