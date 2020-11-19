import React, { FC, useState, useEffect } from 'react';
import { List, Icon, Grid } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;
const Brief = Item.Brief;

interface PageProps {}

const AccountGridPage: FC<PageProps> = () => {
  const data = [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `标题文字`,
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `标题文字`,
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `标题文字`,
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `标题五个字`,
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `标题文字`,
    },
  ];
  return (
    <div className={styles.container}>
      <List className="header">
        <Item arrow="horizontal" thumb={<Icon type="check-circle-o" color="#FFFFFFFF"></Icon>}>
          <div className="headerContent">用户名称</div> <Brief>用户描述描述描述</Brief>
        </Item>
      </List>
      <List className="fontStyle">
        <Item>
          <Grid data={data} hasLine={false} square={false} className="imgStyle" columnNum={5} />
        </Item>
      </List>
      <List className="fontStyle" style={{ marginTop: '.24rem' }} renderHeader="最新优惠">
        <Item>
          <Grid data={data} hasLine={false} square={false} className="imgStyle" columnNum={5} />
        </Item>
      </List>
      <List className="fontStyle" renderHeader="更多推荐">
        <Item>
          <Grid data={data} hasLine={false} square={false} className="imgStyle" columnNum={5} />
        </Item>
      </List>
    </div>
  );
};

export default AccountGridPage;
