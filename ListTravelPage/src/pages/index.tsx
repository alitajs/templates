import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }
const { Item } = List;
const BgImg ='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const ListTravelPage: FC<PageProps> = () => {
  const listData = [
    {
      id: 1,
      icon: BgImg,
      title: 'ofo小黄车',
      labelName: ['免押', '公益'],
    },
    {
      id: 2,
      icon: BgImg,
      title: '哈罗单车',
      labelName: ['免费', '免押', '公益', '活动'],
    },
    {
      id: 3,
      icon: BgImg,
      title: '叮嗒出行',
      labelName: ['免押', '公益'],
    },
    {
      id: 4,
      icon: BgImg,
      title: '叮嗒出行',
      labelName: ['免押'],
    },
  ];
  return (
    <List className={styles.container}>
      {listData.map((val) => (
        <Item key={val.id}>
          <Flex justify="start" align="start">
            <img src={val.icon} alt="BgImg.png" className={styles.listImg} />
            <Flex direction="column" align="start">
              <span className={styles.title}>{val.title}</span>
              {val.labelName.map((val, index) => (
                <Flex key={index} align="center" className={styles.labelFlex} justify="center">
                  <div className={styles.labelName}>{val}</div>
                  <span className={styles.labelIntroduce}>
                    {(val === '免费' && '24城芝麻信用免押骑行') ||
                      (val === '免押' && '50岁以上领免押免费骑资格') ||
                      (val === '公益' && '公共服务 安全保障') ||
                      (val === '活动' && '骑车获得蚂蚁森林能量')}
                  </span>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Item>
      ))}
    </List>
  );
};

export default ListTravelPage;
