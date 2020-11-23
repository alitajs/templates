import React, { FC } from 'react';
import styles from './index.less';
import { List, InputItem, Button, WingBlank } from 'antd-mobile';
import Eyes from '../assets/eyes.png';

interface PageProps {}

const RegisterPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <List className={styles.content}>
        <InputItem clear placeholder="请输入手机号">
          手机号
        </InputItem>
        <InputItem clear extra={<span>发送验证码</span>} placeholder="请输入验证码">
          验证码
        </InputItem>
        <InputItem
          clear
          placeholder="请输入新密码(最少6位)"
          extra={<img src={Eyes}></img>}
        ></InputItem>
      </List>
      <WingBlank size="md" className={styles.btnStyle}>
        <Button type="primary" style={{ marginTop: '.4rem' }}>
          同意协议并提交
        </Button>
      </WingBlank>
      <WingBlank size="md" className={styles.info}>
        查看&nbsp;<span>&laquo;ETC服务用户协议&raquo;</span>
        &nbsp;,&nbsp;授权ETC服务获取身份证、收货地址用于申请ETC,&nbsp;关注车主服务生活号获取审核;
      </WingBlank>
    </div>
  );
};

export default RegisterPage;
