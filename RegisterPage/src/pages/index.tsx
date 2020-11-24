import React, { FC, useState } from 'react';
import { List, InputItem, Button, WingBlank } from 'antd-mobile';
import { SendCode } from '@alitajs/antd-plus';
import styles from './index.less';
import PasswordHiddenImg from '../assets/close.png';
import PasswordOpenImg from '../assets/open.png';

interface PageProps {}

const RegisterPage: FC<PageProps> = () => {
  const [start, setStart] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(false);
  const handleClick = () => {
    setStart(true);
  };
  return (
    <div className={styles.container}>
      <List className={styles.content}>
        <InputItem clear placeholder="请输入手机号">
          手机号
        </InputItem>
        <InputItem
          clear
          extra={
            <SendCode
              type="link"
              start={start}
              onClick={handleClick}
              second={5}
              storageKey="plus-send-code"
              initText="发送验证码"
              runText="{%s}秒后重新获取"
              resetText="重新获取验证码"
              onEnd={() => {
                setStart(false);
              }}
            />
          }
          placeholder="请输入验证码"
        >
          验证码
        </InputItem>
        <InputItem
          clear
          placeholder="请输入新密码(最少6位)"
          type={passwordStatus ? 'password' : 'text'}
          extra={
            <img
              src={passwordStatus ? PasswordHiddenImg : PasswordOpenImg}
              alt=""
              onClick={() => setPasswordStatus(!passwordStatus)}
            ></img>
          }
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
