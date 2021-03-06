import React, { FC } from 'react';
import { List, Icon } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;
const { Brief } = Item;
interface PageProps {}

const AccountListPage: FC<PageProps> = () => {
  const listData = [
    {
      id: 0,
      extra: '详细信息',
      thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    },
    {
      id: 1,
      extra: '',
      thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    },
    {
      id: 2,
      extra: '',
      thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    },
    {
      id: 3,
      extra: '详细信息',
      thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    },
    {
      id: 4,
      extra: '',
      thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    },
    {
      id: 5,
      extra: '',
      thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
    },
  ];
  return (
    <div className={styles.container}>
      <List className={styles.listTop}>
        <Item arrow="horizontal" multipleLine thumb={<Icon type="check-circle-o" />}>
          用户名称
          <Brief>用户描述描述描述</Brief>
        </Item>
      </List>
      <List className={styles.listBottom}>
        {listData.map((value) => (
          <Item key={value.id} arrow="horizontal" thumb={value.thumb} extra={value.extra}>
            单行列表
          </Item>
        ))}
      </List>
    </div>
  );
};

export default AccountListPage;
