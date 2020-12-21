import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const listData = [
  {
    id: 1,
    icon: BgImg,
    title: '国宝大师为孩子讲故事',
    introduce: '家庭教育指导再成长之路',
    salePrice: '¥49.9',
    originPrice: '¥60',
  },
  {
    id: 2,
    icon: BgImg,
    title: '培养宝宝好耐心',
    introduce: '家庭教育指导再成长之路',
    salePrice: '免费',
    originPrice: '¥60',
  },
  {
    id: 3,
    icon: BgImg,
    title: '夏天来了，为什么蚊子能找到我',
    introduce: '家庭教育指导再成长之路',
    salePrice: '¥49.9',
    originPrice: '¥60',
  },
  {
    id: 4,
    icon: BgImg,
    title: '国宝大师为孩子讲故事',
    introduce: '家庭教育指导再成长之路',
    salePrice: '¥49.9',
    originPrice: '¥60',
  },
  {
    id: 5,
    icon: BgImg,
    title: '国宝大师为孩子讲故事',
    introduce: '家庭教育指导再成长之路',
    salePrice: '¥49.9',
    originPrice: '¥60',
  },
];
const CourseSmallPage: FC<PageProps> = () => {
  return (
    <div className={styles.listStyle}>
      <List>
        {listData.map((val) => (
          <Item key={val.id} thumb={val.icon}>
            <Flex direction="column" align="start" justify="center">
              <span className={styles.title}>{val.title}</span>
              <span className={styles.introduce}>{val.introduce}</span>
              <Flex
                className={val.salePrice === '免费' ? styles.freePrice : styles.normal}
                align="center"
              >
                <span className={val.salePrice === '免费' ? styles.free : styles.salePrice}>
                  {val.salePrice}
                </span>
                <span className={styles.originPrice}>{val.originPrice}</span>
              </Flex>
            </Flex>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default CourseSmallPage;
