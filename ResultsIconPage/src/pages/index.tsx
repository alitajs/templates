import React, { FC } from 'react';
import { Button, Result, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './index.less';
const WarnImg = 'https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg';

interface PageProps {}

const ResultsIconPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerResult}>
        <Result
          img={<img src={WarnImg} style={{ width: '1.08rem', height: '1.08rem' }} alt="" />}
          title="警告提示"
          message="内容情况可折行,建议不超过两行"
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

export default ResultsIconPage;
