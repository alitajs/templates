import React, { FC } from 'react';
import { List, Tabs, Flex, Grid, Button } from 'antd-mobile';
import styles from './index.less';
import AddImg from '../../assets/addImg.png';
import GridImg from '../../assets/gridImg.png';
import PlayImg from '../../assets/playImg.png';

interface PageProps { }
const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const InfoListPage: FC<PageProps> = () => {
  const tabs = [
    {
      id: 1,
      title: '推荐',
    },
    {
      id: 2,
      title: '关注',
    },
    {
      id: 3,
      title: '生活',
    },
    {
      id: 4,
      title: '财富',
    },
    {
      id: 5,
      title: '发现',
    },
    {
      id: 6,
      title: '推荐',
    },
  ];
  const gridData = [
    {
      icon: BgImg,
      text: {
        title: '杭州哪儿好玩',
        introduce: '壹贰叁肆伍陆柒',
        ishot: false,
        isFocus: false,
      },
    },
    {
      icon: BgImg,
      text: {
        title: '风光视频影像',
        introduce: '编辑推荐',
        ishot: true,
        isFocus: true,
      },
    },
    {
      icon: BgImg,
      text: {
        title: '跟着日剧学',
        introduce: '近期新鲜推荐',
        ishot: false,
        isFocus: false,
      },
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.addImg}>
        <img src={AddImg} alt="AddImg.png" />
      </div>
      <Tabs
        tabs={tabs}
        distanceToChangeTab={0.8}
        destroyInactiveTab={true}
        onChange={(tab, index) => {
          console.log('onChange', index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log('onTabClick', index, tab);
        }}
      >
        <div>
          <div className={styles.banner}>
            <div className={styles.slider} />
            <Flex align="center" className={styles.bannerLabel}>
              <img src={BgImg} alt="BgImg.png" className={styles.bannerLabelImg} />
              <span className={styles.bannerLabelTitle}>热门专题</span>
            </Flex>
            <span className={styles.bannerTitle}>
              壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆
            </span>
          </div>
          <List className={styles.newsListStyle}>
            <Item>
              <Flex>
                <Flex align="start" direction="column">
                  <Flex align="start" justify="start" className={styles.listHeader}>
                    <span className={styles.listHeader}>
                      <span className={styles.listLabel}>热</span>
                      <span className={styles.listTitle}>
                        马云马化腾对决交通场景，一文说清双方布局
                      </span>
                    </span>
                  </Flex>
                  <Flex align="center">
                    <span className={styles.originTitle}>壹贰叁肆伍</span>
                    <span className={styles.originIntroduce}>壹贰叁肆伍</span>
                  </Flex>
                </Flex>
                <img src={BgImg} alt="BgImg.png" className={styles.listImg} />
              </Flex>
            </Item>
            <Item>
              <Flex>
                <Flex align="start" direction="column">
                  <Flex align="start" justify="start" className={styles.listHeader}>
                    <span className={styles.listHeader}>
                      <span className={styles.listLabel}>置顶</span>
                      <span className={styles.listTitle}>
                        贾跃亭的一篇采访，让我的朋友圈干起了架
                      </span>
                    </span>
                  </Flex>
                  <Flex align="start" justify="start">
                    <span className={styles.originTitle}>壹贰叁肆伍陆柒捌玖拾</span>
                    <span className={styles.originIntroduce}>壹贰叁肆伍...</span>
                  </Flex>
                </Flex>
                <img src={BgImg} alt="BgImg.png" className={styles.listImg} />
              </Flex>
            </Item>
            <Item>
              <Flex>
                <Flex align="start" direction="column">
                  <Flex align="start" justify="start" className={styles.listHeader}>
                    <span className={styles.listHeader}>
                      <span className={styles.listTitle}>
                        世界互联网大会红利释放 互联网产业发展迅速世界互联网大会红利释放
                      </span>
                    </span>
                  </Flex>
                  <Flex align="center">
                    <span className={styles.originTitle}>社保查询</span>
                    <span className={styles.originIntroduce}>杭州市民卡中心</span>
                  </Flex>
                </Flex>
                <img src={BgImg} alt="BgImg.png" className={styles.listImg} />
              </Flex>
            </Item>
            <Item>
              <Flex>
                <Flex align="start" direction="column">
                  <Flex align="start" justify="start" className={styles.listHeader}>
                    <span className={styles.listHeader}>
                      <span className={styles.listTitle}>
                        贾跃亭的一篇深度采访，让我的朋友圈干起了架的朋友圈干起了架
                      </span>
                    </span>
                  </Flex>
                  <Flex align="center">
                    <span className={styles.originTitleOrange}>推荐理由</span>
                    <img
                      src={GridImg}
                      alt="GridImg.png"
                      style={{
                        width: '0.3rem',
                        height: '0.3rem',
                        borderRadius: '0.02rem',
                        margin: '0.03rem 0.1rem 0 0.05rem',
                      }}
                    />
                    <span className={styles.originIntroduce}>出入境管理等3个服务</span>
                  </Flex>
                </Flex>
              </Flex>
            </Item>
            <Item>
              <Flex>
                <Flex align="start" direction="column">
                  <Flex align="start" justify="start" className={styles.listHeader}>
                    <span className={styles.listHeader}>
                      <span className={styles.listTitle}>
                        世界互联网大会红利释放互联网产业发展迅速世界互联网大会红利释放
                      </span>
                    </span>
                  </Flex>
                  <Flex align="center">
                    <span className={styles.originTitleOrange}>热门事件</span>
                    <span className={styles.originIntroduce}>爱借还</span>
                  </Flex>
                </Flex>
                <img src={BgImg} alt="BgImg.png" className={styles.listImg} />
              </Flex>
            </Item>
            <Item>
              <Flex align="start" direction="column">
                <Flex align="start" justify="start" className={styles.listHeader}>
                  <span className={styles.listHeader}>
                    <span className={styles.listTitle}>
                      世界互联网大会红利释放 桐乡互联网产业发展迅速乡互联网产业发
                    </span>
                  </span>
                </Flex>
                <Flex justify="between" className={styles.ImgList}>
                  <img src={BgImg} alt="BgImg.png" className={styles.imgListStyle} />
                  <img src={BgImg} alt="BgImg.png" className={styles.imgListStyle} />
                  <img src={BgImg} alt="BgImg.png" className={styles.imgListStyle} />
                  <span className={styles.moreImgListStyle}>26 +</span>
                </Flex>
                <Flex align="center" justify="between">
                  <span className={styles.originTitleOrange}>热门事件</span>
                  <span className={styles.originIntroduce}>西雅图雷尼尔</span>
                </Flex>
              </Flex>
            </Item>
            <Item>
              <Flex style={{ marginTop: '0.2rem' }}>
                <img src={BgImg} alt="BgImg.png" className={styles.projectListHeaderImg} />
                <span className={styles.projectListHeaderTitle}>专题</span>
              </Flex>
            </Item>
            <Item>
              <Flex direction="column">
                <Flex align="start" direction="column">
                  <Flex align="start" justify="start">
                    <span className={styles.listHeader}>
                      <span className={styles.listTitle}>
                        世界互联网大会红利释放 桐乡互联网产业发展迅速乡互联网产业发
                      </span>
                    </span>
                  </Flex>
                </Flex>
                <div className={styles.projectListBanner}>
                  <img src={BgImg} alt="BgImg.png" className={styles.projectListImg} />
                  <span className={styles.projectListLabel}>攻略</span>
                </div>
              </Flex>
            </Item>
            <Item>
              <Flex>
                <Flex align="start" direction="column">
                  <Flex align="start" justify="start">
                    <span className={styles.listHeader}>
                      <span className={styles.listTitle}>
                        世界互联网大会红利释放 桐乡互联网产业发展迅速
                      </span>
                    </span>
                  </Flex>
                  <Flex align="center" style={{ marginTop: '0.08rem' }}>
                    <span className={styles.originTitle}>本地生活</span>
                    <span className={styles.originIntroduce}>杭州市民卡中心</span>
                  </Flex>
                </Flex>
                <div className={styles.listAllImg}>
                  <img src={BgImg} alt="BgImg.png" className={styles.listBgImg} />
                  <img src={PlayImg} alt="PlayImg.png" className={styles.listPlayImg} />
                </div>
              </Flex>
            </Item>
            <Item>
              <Flex style={{ marginTop: '0.2rem' }}>
                <img src={BgImg} alt="BgImg.png" className={styles.projectListHeaderImg} />
                <span className={styles.projectListHeaderTitle}>为你推荐</span>
              </Flex>
            </Item>
            <Item>
              <Grid
                data={gridData}
                hasLine={false}
                square={false}
                columnNum={3}
                renderItem={(val) => (
                  <Flex direction="column">
                    <img src={val?.icon} alt="BgImg.png" className={styles.gridImg} />
                    <span className={styles.gridTitle}>{val?.text.title}</span>
                    <span
                      className={val?.text.ishot ? styles.introduceIsHot : styles.gridIntroduce}
                    >
                      {val?.text.introduce}
                    </span>
                    <div className={val?.text.isFocus ? styles.isFocus : styles.unFocus}>
                      <Button>{val?.text.isFocus ? '已关注' : '+ 关注'}</Button>
                    </div>
                  </Flex>
                )}
              />
            </Item>
          </List>
        </div>
      </Tabs>
      <div className={styles.footer}>——————— 蚂上看，知生活 ———————</div>
    </div>
  );
};

export default InfoListPage;
