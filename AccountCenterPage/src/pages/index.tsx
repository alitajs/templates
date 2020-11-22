import React, { FC } from 'react';
import { List, Icon } from 'antd-mobile';

import styles from './index.less';

const { Item } = List;
const { Brief } = Item;

interface PageProps {}

const AccountCenterPage: FC<PageProps> = () => {
  const listData = [
    {
      id: 0,
      content: '标题文字',
      extra: '描述文字',
    },
    {
      id: 1,
      content: '标题文字',
      extra: '',
    },
    {
      id: 2,
      content: '标题文字',
      extra: '',
    },
    {
      id: 3,
      content: '标题文字',
      extra: '描述文字',
    },
    {
      id: 4,
      content: '标题文字',
      extra: '',
    },
    {
      id: 5,
      content: '标题文字',
      extra: '',
    },
  ];
  return (
    <div className={styles.container}>
      <List className={styles.header}>
        <Item
          wrap={true}
          thumb={
            <Icon
              type="check-circle-o"
              style={{ width: '1.2rem', height: '1.2rem', marginTop: '.24rem' }}
            ></Icon>
          }
        >
          <div className={styles.headerContent}>用户名称</div>
          <Brief>用户描述描述描述</Brief>
        </Item>
      </List>
      <List className={styles.content} style={{ marginTop: '.24rem' }}>
        {listData.map((value) => (
          <Item
            key={value.id}
            extra={value.extra}
            arrow="horizontal"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png"
          >
            {value.content}
          </Item>
        ))}
      </List>
    </div>
  );
};

export default AccountCenterPage;
