import React, { FC } from 'react';
import { Button, Result, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './index.less';

const AntImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8e459166dd84ed3965c5d9c4f4bf4cd~tplv-k3u1fbpfcp-watermark.image';

interface PageProps { }

const ResultsImagePage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerResult}>
        <Result
          img={<img src={AntImg} style={{ width: '1.48rem', height: '2rem' }} alt="" />}
          message={<span>付款没成功</span>}
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

export default ResultsImagePage;
