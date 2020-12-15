import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const InfoImageListPage: FC<PageProps> = () => {
  const listData = [
    {
      id: 1,
      icon: BgImg,
      title: '蚂蚁森林 开启绿色生活',
      introduce: '壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒壹贰叁肆伍陆柒捌玖拾壹贰...',
    },
    {
      id: 2,
      icon: BgImg,
      title: '城市服务 到账快更实惠',
      introduce: '手握医保神器，却不',
    },
    {
      id: 3,
      icon: BgImg,
      title: '蚂蚁森林 开启绿色生活',
      introduce: '壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒壹贰叁肆伍陆柒捌玖拾壹贰...',
    },
    {
      id: 4,
      icon: BgImg,
      title: '城市服务 到账快更实惠',
      introduce: '手握医保神器，却不',
    },
  ];
  return (
    <div className={styles.container}>
      <List className={styles.listStyle}>
        {listData.map((val) => (
          <Item key={val.id}>
            <Flex direction="column" align="start">
              <img src={val.icon} className={styles.listImg} />
              <span className={styles.listTitle}>{val.title}</span>
              <span className={styles.listIntroduce}>{val.introduce}</span>
            </Flex>
          </Item>
        ))}
      </List>
      <div className={styles.footer}>——————— 蚂上看，知生活 ———————</div>
    </div>
  );
};

export default InfoImageListPage;
