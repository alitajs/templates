import React, { FC } from 'react';
import { Tabs, List, Flex, Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const { Item } = List;

const CourseDetailBuyPage: FC<PageProps> = () => {
  const tabs = [
    {
      title: '详情',
      key: '1',
    },
    {
      title: '课程',
      key: '2',
    },
  ];
  const listData = [
    {
      id: '1',
      icon: BgImg,
      title: '第24课 Assertiveness 在生活中的应用及案例分析',
      updateTime: '昨天 16:09更新',
    },
    {
      id: '2',
      icon: BgImg,
      title: '第23课 如何 assertive 的面对冲突',
      updateTime: '昨天 16:09更新',
    },
    {
      id: '3',
      icon: BgImg,
      title: '第23课 如何 assertive 的面对冲突',
      updateTime: '昨天 16:09更新 ',
    },
    {
      id: '4',
      icon: BgImg,
      title: '第24课 Assertiveness 在生活中的应用及案例分析',
      updateTime: '昨天 16:09更新',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={BgImg} alt="BgImg.png" className={styles.bannerImg} />
        <span className={styles.headerTitle}>壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆</span>
        <span className={styles.headerIntroduce}>壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒捌玖拾</span>
        <span className={styles.headerCourseUpdate}>
          每周一五更新丨预计更新36课 2017-08-12已更新8课
        </span>
        <span className={styles.headerPrice}>¥19.9</span>
      </div>
      <div className={styles.tabsStyle}>
        <Tabs
          tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => {
            console.log('onChange', index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab);
          }}
        >
          <div className={styles.tabsItem}>
            <List renderHeader="老师简介">
              <Item>
                <span style={{ marginBottom: '0.24rem' }} className={styles.contentStyle}>
                  我叫风胡子，是一名心理学培训师，同时也是一名父亲，擅长将心理学的研究成果融合亲子之间的琐碎事件，以便为解决为人父母的小烦恼提供科学的切入点。
                </span>
                <span className={styles.contentStyle}>
                  我从事与亲子关系相关的研究与培训已经八年时间了。在这期间，我获得了爱丁堡大学的“儿童与青少年临床心理学”的资质认证，以及发展与教育心理学的硕士学位，在线上线下搞培训的同时，我每年还会推出一个符合当下教育趋势而家长们又有迫切需求的系列课程。
                </span>
              </Item>
            </List>
            <div className={styles.tabsCourse}>
              <List
                renderHeader={
                  <Flex>
                    <Button
                      type="ghost"
                      inline
                      size="small"
                      style={{ color: '#1677FF', borderColor: '#1677FF' }}
                    >
                      倒序
                    </Button>
                    <Button
                      type="ghost"
                      inline
                      size="small"
                      style={{ color: '#1677FF', borderColor: '#1677FF' }}
                    >
                      缓存音频到本地
                    </Button>
                  </Flex>
                }
              >
                {listData.map((val) => (
                  <Item key={val.id} thumb={val.icon}>
                    <Flex direction="column" align="start" justify="center">
                      <span className={styles.title}>{val.title}</span>
                      <span className={styles.updateTime}>{val.updateTime}</span>
                    </Flex>
                  </Item>
                ))}
              </List>
            </div>
          </div>
        </Tabs>
      </div>
      <div className={styles.bottomPay}>
        <Flex justify="around">
          <Button inline className={styles.tryReadBtn}>
            免费试读
          </Button>
          <Button inline className={styles.buyBtn}>
            立即购买
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default CourseDetailBuyPage;
