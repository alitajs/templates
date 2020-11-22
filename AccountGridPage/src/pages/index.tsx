import React, { FC } from 'react';
import { List, Icon, Grid } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;
const { Brief } = Item;

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
      <List className={styles.header}>
        <Item arrow="horizontal" thumb={<Icon type="check-circle-o" color="#FFFFFFFF"></Icon>}>
          <span>用户名称</span><Brief>用户描述描述描述</Brief>
        </Item>
      </List>
      <List className={styles.fontStyle}>
        <Item>
          <Grid
            data={data}
            hasLine={false}
            square={false}
            className={styles.imgStyle}
            columnNum={5}
          />
        </Item>
      </List>
      <List className={styles.fontStyle} style={{ marginTop: '.24rem' }} renderHeader="最新优惠">
        <Item>
          <Grid
            data={data}
            hasLine={false}
            square={false}
            className={styles.imgStyle}
            columnNum={5}
          />
        </Item>
      </List>
      <List className={styles.fontStyle} renderHeader="更多推荐">
        <Item>
          <Grid
            data={data}
            hasLine={false}
            square={false}
            className={styles.imgStyle}
            columnNum={5}
          />
        </Item>
      </List>
    </div>
  );
};

export default AccountGridPage;
