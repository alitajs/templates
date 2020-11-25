import React, { FC } from 'react';
import { NoticeBar } from 'antd-mobile';
import { Button } from 'antd';
import styles from './index.less';

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

interface PageProps {}

const CollectionCodePage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NoticeBar mode="closable">次码收钱提现收费。如何免费</NoticeBar>
      </div>
      <div className={styles.collection}>
        <span>支付宝扫一扫，向我付钱</span>
        <img src={BgImg} alt="" style={{ width: '3.6rem', height: '3.6rem' }} />
        <div>
          <Button type="link">设置金额</Button>
          <Button type="link">保存图片</Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCodePage;
