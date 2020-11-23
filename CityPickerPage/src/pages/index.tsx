import React, { FC } from 'react';
import styles from './index.less';
import { List, SearchBar, Icon, Flex } from 'antd-mobile';
import Place from '../../assets/place.png';

const { Item } = List;
interface PageProps {}

const CityPickerPage: FC<PageProps> = () => {
  const tagTopData = [
    {
      id: 1,
      text: '乌鲁木齐',
    },
    {
      id: 2,
      text: '北京',
    },
    {
      id: 3,
      text: '杭州',
    },
    {
      id: 4,
      text: '阿克苏地区…',
    },
    {
      id: 5,
      text: '上海',
    },
    {
      id: 6,
      text: '西安',
    },
    {
      id: 7,
      text: '最多五个字…',
    },
    {
      id: 8,
      text: '香港',
    },
    {
      id: 9,
      text: '日本',
    },
  ];
  const tagBottomData = [
    {
      id: 1,
      text: '鞍山',
    },
    {
      id: 2,
      text: '阿克苏地区',
    },
    {
      id: 3,
      text: '安庆',
    },
    {
      id: 4,
      text: '安康',
    },
    {
      id: 5,
      text: '阿里',
    },
    {
      id: 6,
      text: '安顺',
    },
    {
      id: 7,
      text: '阿拉善右旗',
    },
  ];
  const gridData = [
    {
      id: 1,
      text: '热',
    },
    {
      id: 2,
      text: 'A',
    },
    {
      id: 3,
      text: 'B',
    },
    {
      id: 4,
      text: 'C',
    },
    {
      id: 5,
      text: 'D',
    },
    {
      id: 6,
      text: 'E',
    },
    {
      id: 7,
      text: 'F',
    },
    {
      id: 9,
      text: 'G',
    },
    {
      id: 10,
      text: 'H',
    },
    {
      id: 11,
      text: 'I',
    },
    {
      id: 12,
      text: 'J',
    },
    {
      id: 13,
      text: 'K',
    },
    {
      id: 14,
      text: 'L',
    },
    {
      id: 15,
      text: 'M',
    },
    {
      id: 16,
      text: 'N',
    },
    {
      id: 17,
      text: 'O',
    },
    {
      id: 18,
      text: 'P',
    },
    {
      id: 19,
      text: 'Q',
    },
    {
      id: 20,
      text: 'R',
    },
    {
      id: 21,
      text: 'S',
    },
    {
      id: 22,
      text: 'T',
    },
    {
      id: 23,
      text: 'U',
    },
    {
      id: 24,
      text: 'V',
    },
    {
      id: 25,
      text: 'W',
    },
    {
      id: 26,
      text: 'X',
    },
    {
      id: 27,
      text: 'Y',
    },
    {
      id: 28,
      text: 'Z',
    },
    {
      id: 29,
      text: '#',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar placeholder="健康理财" />
      </div>
      <List renderHeader="当前城市" className={styles.gridStyle}>
        <Item className={styles.tagStyle}>
          <div className={styles.flexItem}>
            <img src={Place} /> 杭州
          </div>
        </Item>
      </List>
      <List renderHeader="搜索历史" className={styles.gridStyle}>
        <Item className={styles.tagStyle}>
          {tagTopData.map((val) => (
            <div key={val.id} className={styles.flexItem}>
              {val.text}
            </div>
          ))}
        </Item>
      </List>
      <List renderHeader="A" className={styles.bottomList}>
        {tagBottomData.map((val) => (
          <Item key={val.id}>{val.text}</Item>
        ))}
      </List>
      <Flex direction="column" className={styles.rightList}>
        <Flex.Item>
          <Icon type="search" color="#999999" />
        </Flex.Item>
        {gridData.map((val) => (
          <Flex.Item key={val.id} className={val.text === 'P' ? 'checkedStyle' : ''}>
            {val.text}
          </Flex.Item>
        ))}
      </Flex>
    </div>
  );
};

export default CityPickerPage;
