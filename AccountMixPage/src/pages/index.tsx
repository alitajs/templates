import React, { FC } from 'react';
import { List, Grid, Carousel, Icon } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;
const { Brief } = Item;

interface PageProps {}

const AccountMixPage: FC<PageProps> = () => {
  const carouselId = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'];
  const textData = [
    {
      text: '标题文字',
    },
    {
      text: '标题文字',
    },
    {
      text: '标题文字',
    },
    {
      text: '标题文字',
    },
  ];
  const iconData = [
    {
      text: '1',
    },
    {
      text: '0',
    },
    {
      text: '12',
    },
    {
      text: '2',
    },
  ];
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
  const listData = [
    {
      id: 0,
      content: '标题文字',
      extra: '描述文字',
      thumb: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    },
    {
      id: 1,
      content: '标题文字',
      extra: '',
      thumb: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    },
    {
      id: 2,
      content: '标题文字',
      extra: '',
      thumb: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    },
  ];

  return (
    <div className={styles.container}>
      <List className={styles.header}>
        <Item arrow="horizontal" thumb={<Icon type="check-circle-o" />}>
          <div style={{ fontSize: '.36rem', color: '#333333' }}>用户名称</div>
          <Brief>用户描述描述描述</Brief>
        </Item>
      </List>
      <div className={styles.gridStyle}>
        <Grid className={styles.gridStyleTop} data={iconData} hasLine={false} square={false} />
        <Grid className={styles.gridStyleBottom} data={textData} hasLine={false} square={false} />
      </div>
      <List renderHeader="最新优惠" className={styles.listStyleTop}>
        <Grid data={data} square={false} columnNum={5} hasLine={false} />
        <Item>
          <Carousel style={{ touchAction: 'none' }} autoplay infinite>
            {carouselId.map((val) => (
              <a key={val} style={{ display: 'inline-block', width: '100%', height: '2rem' }}>
                <img
                  alt="广告图片"
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  style={{
                    width: '100%',
                    verticalAlign: 'top',
                    height: '2rem',
                    borderRadius: '.16rem',
                  }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </a>
            ))}
          </Carousel>
        </Item>
      </List>
      <List renderHeader="标题列表" className={styles.listStyleBottom}>
        {listData.map((val) => (
          <Item extra={val.extra} key={val.id} thumb={val.thumb}>
            {val.content}
          </Item>
        ))}
      </List>
    </div>
  );
};

export default AccountMixPage;
