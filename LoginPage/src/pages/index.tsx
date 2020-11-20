import React, { FC } from 'react';
import styles from './index.less';
import { List, InputItem, WingBlank, Button } from 'antd-mobile';
import Water from '@/assets/water.png';
interface PageProps {}

const LoginPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Water} />
        <span>小程序名称</span>
      </div>
      <List className={styles.content}>
        <InputItem clear placeholder="请输入手机号">
          手机号
        </InputItem>
        <InputItem clear extra={<span>发送验证码</span>} placeholder="请输入验证码">
          验证码
        </InputItem>
      </List>
      <WingBlank size="md" className={styles.btnStyle}>
        <Button style={{ marginTop: '.4rem' }}>登录</Button>
      </WingBlank>
      <span className={styles.contentBottom}>用户注册</span>
    </div>
  );
};

export default LoginPage;
