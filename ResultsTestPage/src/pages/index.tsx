import React, { FC } from 'react';
import { Button, Result, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './index.less';

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

interface PageProps {}

const ResultsTestPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerResult}>
        <Result
          img={<img src={BgImg} style={{ width: '2rem', height: '2rem' }} alt="" />}
          title="状态提示"
          message="辅助说明"
        />
      </div>
      <WhiteSpace size="sm" />
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <Button style={{ background: '#1677FF', color: '#FFFFFF' }}>按钮</Button>
      </WingBlank>
      <WhiteSpace size="sm" />
      <WhiteSpace size="xs" />
      <WingBlank size="lg">
        <Button>按钮</Button>
      </WingBlank>
    </div>
  );
};

export default ResultsTestPage;
