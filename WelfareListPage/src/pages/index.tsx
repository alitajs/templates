import React, { FC } from 'react';
import { List, Flex, Slider } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }
const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const WelfareListPage: FC<PageProps> = () => {
  const data = [
    {
      id: 1,
      icon: BgImg,
      title: '让孩子回归大自然',
      introduce: '让孩子在山野、在大自然中找回自我乐趣，远离自然缺失症',
      heartNum: '271829份爱心',
      label: ['环境保护'],
      introduceLabel: '',
      progress: '',
      bottom: '',
    },
    {
      id: 2,
      icon: BgImg,
      title: '爱的分贝 救救耳朵',
      introduce: '为脑溢血患者陶金筹集康复治疗费',
      heartNum: '271829份爱心',
      label: ['耳蜗植入', '贫困患儿'],
      introduceLabel: '',
      progress: '',
      bottom: '',
    },
    {
      id: 3,
      icon: BgImg,
      title: '3岁幼儿的小小梦',
      introduce: '3岁幼儿突患白血病，骨髓配型成功，急需移植资助',
      heartNum: '271829份爱心',
      label: [''],
      introduceLabel: '',
      progress: '74%',
      bottom: '区块链-善款追溯',
    },
  ];
  return (
    <div className={styles.listStyle}>
      <List>
        {data.map((val) => (
          <Item key={val.id}>
            <Flex align="start">
              <img src={BgImg} alt="BgImg.png" className={styles.listImg} />
              <Flex direction="column" align="start" justify="start" wrap="wrap">
                <Flex.Item>
                  <span className={styles.title}>{val.title}</span>
                  <span className={styles.introduce}>{val.introduce}</span>
                  <div>
                    {val.progress && (
                      <Slider
                        defaultValue={74}
                        min={0}
                        max={100}
                        trackStyle={{
                          backgroundColor: '#FF3B30',
                          height: '0.08rem',
                          borderRadius: '0.04rem',
                          marginTop: '0.06rem',
                        }}
                        railStyle={{
                          backgroundColor: '#EEEEEE',
                          borderRadius: '0.04rem',
                          marginTop: '0.06rem',
                          height: '0.08rem',
                        }}
                        handleStyle={{
                          display: 'none',
                        }}
                      />
                    )}
                  </div>
                  <Flex justify="between">
                    <span className={val.progress ? styles.heartNumHasProgress : styles.heartNum}>
                      {val.heartNum}
                    </span>
                    <span className={styles.progress}>{val.progress}</span>
                  </Flex>
                  <Flex>
                    {val.label.map((val, index) => (
                      <div
                        key={index}
                        className={val ? styles.labelStyle : styles.hiddenLabelStyle}
                      >
                        {val}
                      </div>
                    ))}
                  </Flex>
                  <span className={styles.bottom}>{val.bottom}</span>
                </Flex.Item>
              </Flex>
            </Flex>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default WelfareListPage;
