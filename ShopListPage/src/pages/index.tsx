import React, { FC } from 'react';
import { List, Carousel, Button, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const carouselData = [1, 2, 3];
const listData = [
  {
    id: 1,
    icon: BgImg,
    title: '鲜丰水果超市鲜丰水果',
    place: '文二西路188号文二西路',
    introduce: '生活服务-水果店',
    status: 'wait',
  },
  {
    id: 2,
    icon: BgImg,
    title: '鲜丰水果超市鲜丰水果',
    place: '文二西路188号文二西路',
    introduce: '生活服务-水果店',
    status: 'pass',
  },
  {
    id: 3,
    icon: BgImg,
    title: '鲜丰水果超市鲜丰水果',
    place: '文二西路188号文二西路',
    introduce: '生活服务-水果店',
    status: '',
  },
  {
    id: 4,
    icon: BgImg,
    title: '鲜丰水果超市鲜丰水果',
    place: '文二西路188号文二西路',
    introduce: '生活服务-水果店',
    status: '',
  },
  {
    id: 5,
    icon: BgImg,
    title: '鲜丰水果超市鲜丰水果',
    place: '文二西路188号文二西路',
    introduce: '生活服务-水果店',
    status: '',
  },
  {
    id: 6,
    icon: BgImg,
    title: '鲜丰水果超市鲜丰水果',
    place: '文二西路188号文二西路',
    introduce: '生活服务-水果店',
    status: '',
  },
];
const ShopListPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Carousel
          autoplay={false}
          infinite
          style={{ touchAction: 'none' }}
          dotStyle={{
            background: '#FFFFFF',
            width: '0.06rem',
            height: '0.06rem',
            opacity: 0.4,
          }}
          dotActiveStyle={{ width: '0.06rem', height: '0.06rem' }}
        >
          {carouselData.map((val) => (
            <a key={val} style={{ display: 'inline-block', width: '100%', height: '2rem' }}>
              <img
                src={BgImg}
                alt=""
                style={{
                  width: '100%',
                  verticalAlign: 'top',
                  height: '200px',
                  borderRadius: '0.16rem',
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
      <List
        renderHeader={
          <Flex align="center" justify="between">
            <span className={styles.myShopNum}>{`我的门店\(${listData.length}\)`}</span>
            <Button>新增门店</Button>
          </Flex>
        }
        className={styles.listStyle}
      >
        {listData.map((val) => (
          <Item
            key={val.id}
            thumb={
              <div>
                <img src={BgImg} alt="BmImg.png" />
                <span className={val.status === '' ? styles.unChecking : styles.check}>
                  审核{val.status === 'pass' ? '通过' : '中'}
                </span>
              </div>
            }
          >
            <Flex direction="column" align="start">
              <span className={styles.title}>{val.title}</span>
              <span className={styles.place}>{val.place}</span>
              <span className={styles.introduce}>{val.introduce}</span>
            </Flex>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ShopListPage;
