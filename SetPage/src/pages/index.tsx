import React, { FC, useState, useEffect } from 'react';
import styles from './index.less';
import { List, WingBlank, Button } from 'antd-mobile';
interface PageProps {}
const Item = List.Item;
const SetPage: FC<PageProps> = () => {
  return (
    <div>
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
        <List style={{ marginTop: '12px' }}>
          <Item extra="详细信息" arrow="horizontal" key="0">
            求助反馈
          </Item>
          <Item arrow="horizontal" key="1">
            关于
          </Item>
        </List>
        <WingBlank size="md">
          <Button style={{ marginTop: '20px' }}>退出登录</Button>
        </WingBlank>
      </div>
    </div>
  );
};

export default SetPage;
