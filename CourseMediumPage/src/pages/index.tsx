import React, { FC } from 'react';
import { List, Flex } from 'antd-mobile';
import styles from './index.less';
import PlayImg from '../../assets/play.png';
import VIPImg from '../../assets/VIPImg.png';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const listData = [
  {
    id: 1,
    icon: BgImg,
    videoType: '金融',
    author: '子怒',
    professional: '／领复资本创始合伙人',
    title: '从5万到100万，给家庭投资赋能给家庭投资赋能',
    introduce: '为你的幸福生活保驾护航',
    labelArr: ['大师课推荐', '积分兑换'],
    salePrice: '¥45',
    originPrice: '¥80',
    integralNum: '',
    integral: '',
    subscribeNum: '2.2万人订阅',
    audition: '|  05 家庭资产配置，为你的幸福生活保驾护航',
  },
  {
    id: 2,
    icon: BgImg,
    videoType: '金融',
    author: '王向红',
    professional: '／英语教学专家',
    title: '小白买房攻略',
    introduce: '为你的幸福生活保驾护航',
    labelArr: ['剩余2000份'],
    salePrice: '¥45',
    originPrice: '',
    integralNum: '',
    integral: '',
    subscribeNum: '2.2万人订阅',
    audition: '|  01 课程前言：你真的做好买房的准备了吗',
  },
  {
    id: 3,
    icon: BgImg,
    videoType: '金融',
    author: '支小宝',
    professional: '／支付宝交互设计师专家',
    title: '小白的12堂基金挣钱课',
    introduce: '掌握基金投资要点，把握挣钱脉络',
    labelArr: [],
    salePrice: '',
    originPrice: '',
    integralNum: '399',
    integral: '积分',
    subscribeNum: '2.2万人订阅',
    audition: '|  01 课程前言：你真的做好买房的准备了吗',
  },
  {
    id: 4,
    icon: BgImg,
    videoType: '金融',
    author: '周勇',
    professional: '／财富管理专家',
    title: '定投制胜，基金投资指南',
    introduce: '为你的幸福生活保驾护航',
    labelArr: [],
    salePrice: '免费',
    originPrice: '',
    integralNum: '',
    integral: '',
    subscribeNum: '3829人订阅',
    audition: '',
  },
  {
    id: 5,
    icon: BgImg,
    videoType: '金融',
    author: '支小宝',
    professional: '／支付宝交互设计师专家',
    title: '小白的12堂基金挣钱课',
    introduce: '掌握基金投资要点，把握挣钱脉络',
    labelArr: [],
    salePrice: '¥45',
    originPrice: '',
    integralNum: '',
    integral: '',
    subscribeNum: '2.2万人订阅',
    audition: '',
  },
];
const CourseMediumPage: FC<PageProps> = () => {
  return (
    <div className={styles.listStyle}>
      <List>
        {listData.map((val) => (
          <Item
            key={val.id}
            thumb={
              <div style={{ position: 'relative' }}>
                <img src={BgImg} alt="BgImg.png" className={styles.videoImg} />
                <span className={styles.videoType}>{val.videoType}</span>
                <img src={PlayImg} alt="Play.png" className={styles.play} />
              </div>
            }
          >
            <Flex direction="column" align="start" justify="start">
              <Flex align="center">
                <span className={styles.author}>
                  {val.author}
                  <img src={VIPImg} alt="VIPImg.png" className={styles.vipImg} />
                </span>
                <span className={styles.professional}>{val.professional}</span>
              </Flex>
              <span className={styles.title}>{val.title}</span>
              <span className={styles.introduce}>{val.introduce}</span>
              <Flex>
                {val.labelArr &&
                  val.labelArr.map((val, index) => (
                    <div key={index} className={styles.labelStyle}>
                      {val}
                    </div>
                  ))}
              </Flex>
              <Flex align="center" style={{ marginTop: '0.16rem' }}>
                <span
                  className={
                    val.integral !== '积分' && val.salePrice !== '免费'
                      ? styles.salePrice
                      : styles.useIntegral
                  }
                >
                  {val.salePrice}
                </span>
                <span
                  className={
                    val.integral !== '积分' && val.salePrice !== '免费'
                      ? styles.originPrice
                      : styles.useIntegral
                  }
                >
                  {val.originPrice}
                </span>
                <span
                  className={
                    val.integral === '积分' && val.salePrice !== '免费'
                      ? styles.integralNum
                      : styles.useMoney
                  }
                >
                  {val.integralNum}
                </span>
                <span
                  className={
                    val.integral === '积分' && val.salePrice !== '免费'
                      ? styles.integral
                      : styles.useMoney
                  }
                >
                  {val.integral}
                </span>
                <span className={val.salePrice === '免费' ? styles.free : styles.useMoney}>
                  {val.salePrice}
                </span>
                <span className={styles.subscribeNum}>{val.subscribeNum}</span>
              </Flex>
              <div className={val.audition ? styles.audition : styles.hiddenAudition}>
                <span>
                  <span className={styles.auditionFontStyle}>试听</span>
                  {val.audition}
                </span>
              </div>
            </Flex>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default CourseMediumPage;
