import React, { FC } from 'react';
import { List, WingBlank, Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

const { Item } = List;
const SetPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <List style={{ marginTop: '12px' }}>
        <Item extra="详细信息" arrow="horizontal" key="0">
          账号管理
        </Item>
        <Item arrow="horizontal" key="1">
          安全中心
        </Item>
        <Item extra="153******38" arrow="horizontal" key="2">
          手机号
        </Item>
      </List>
      <List style={{ marginTop: '12px' }}>
        <Item extra="详细信息" arrow="horizontal" key="0">
          支付设置
        </Item>
        <Item arrow="horizontal" key="1">
          密码设置
        </Item>
        <Item arrow="horizontal" key="2">
          隐私
        </Item>
        <Item arrow="horizontal" key="3">
          通用
        </Item>
      </List>
      <List style={{ marginTop: '0.12rem' }}>
        <Item extra="详细信息" arrow="horizontal" key="0">
          求助反馈
        </Item>
        <Item arrow="horizontal" key="1">
          关于
        </Item>
      </List>
      <WingBlank size="md">
        <Button style={{ marginTop: '0.20rem' }}>退出登录</Button>
      </WingBlank>
    </div>
  );
};

export default SetPage;
