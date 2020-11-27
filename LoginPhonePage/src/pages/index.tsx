import React, { FC, useState } from 'react';
import { SendCode } from '@alitajs/antd-plus';
import { List, InputItem, WingBlank, Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const LoginPhonePage: FC<PageProps> = () => {
  const [start, setStart] = useState(false);
  const handleClick = () => {
    setStart(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>手机快捷登录</div>
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
      </List>
      <WingBlank size="md" className={styles.btnStyle}>
        <Button style={{ marginTop: '.4rem' }}>登录</Button>
      </WingBlank>
      <span className={styles.contentBottom}>账号密码登录</span>
    </div>
  );
};

export default LoginPhonePage;
