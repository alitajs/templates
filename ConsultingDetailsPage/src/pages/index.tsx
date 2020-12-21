import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import { Tooltip } from 'antd';
import styles from './index.less';

interface PageProps { }
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';

const ConsultingDetailsPage: FC<PageProps> = () => {
  const text = (
    <span
      className={styles.promptText}
      style={{
        display: 'block',
        fontSize: '0.3rem',
        height: '1.32rem',
        overflow: 'hidden',
        color: '#00B578',
        padding: '0.16rem 0.14rem',
        fontWeight: 400
      }}
    >
      目前你考虑到近视手术, 价格其实根据手术方式，一般800元左右。
    </span>
  );
  return (
    <div className={styles.container}>
      <List className={styles.listStyle}>
        <Flex direction="column" align="start">
          <Flex>
            <span className={styles.author}>患者提问</span>
            <span className={styles.date}>08/24</span>
          </Flex>
          <span className={styles.questionContent}>
            我想做近视手术，请问手术一般需要多少钱术前需要做些什么准备，手术无风险？
          </span>
          <Tooltip
            title={text}
            defaultVisible={true}
            visible={true}
            placement="rightTop"
            color="#D4FFF1"
            overlayClassName={styles.container}
            overlayStyle={{
              borderRadius: 8,
              width: 'calc(100% - 1.74rem)',
              maxWidth: '100%',
              paddingLeft: '0.25rem',
              borderRight: '0.08rem',
            }}
          >
            <img src={AvatarImg} alt="AvatarImg.png" className={styles.AvatarImg} />
          </Tooltip>
          <Flex justify="start" className={styles.flexStyle}>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
          </Flex>
        </Flex>
      </List>
      <List className={styles.listStyle}>
        <Flex direction="column" align="start">
          <Flex>
            <span className={styles.author}>患者提问</span>
            <span className={styles.date}>08/24</span>
          </Flex>
          <span className={styles.questionContent}>
            我想做近视手术，请问手术一般需要多少钱术前需要做些什么准备，手术无风险？
          </span>
          <Tooltip
            title={text}
            defaultVisible={true}
            visible={true}
            placement="rightTop"
            color="#D4FFF1"
            overlayClassName={styles.container}
            overlayStyle={{
              borderRadius: 8,
              width: 'calc(100% - 1.76rem)',
              maxWidth: '100%',
              paddingLeft: '0.25rem',
              borderRight: '0.08rem',
            }}
          >
            <img src={AvatarImg} alt="AvatarImg.png" className={styles.AvatarImg} />
          </Tooltip>
          <Flex justify="start" className={styles.flexStyle}>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
            <Flex.Item>
              <img src={BgImg} alt="BgImg.png" className={styles.bgImg} />
            </Flex.Item>
          </Flex>
        </Flex>
      </List>
    </div>
  );
};

export default ConsultingDetailsPage;
