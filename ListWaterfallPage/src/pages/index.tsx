import React, { FC } from 'react';
import Masonry from 'react-masonry-component';
import { Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps {}

interface DataProps {
  id: string | number;
  img: string;
  title: string;
  subTitle?: string;
  btnFlag?: boolean;
  avatar?: string;
  highLight?: string;
  footList?: string[];
}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const AvatarImg =
  'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';
const data = [
  {
    id: '1',
    img: BgImg,
    title: '东京购物精华日本药妆店便宜必败好物',
    subTitle: '文章描述两段：从日本回来2周整理一下',
    footList: ['SyrenaCC', '233 喜欢'],
    avatar: AvatarImg,
  },
  {
    id: '2',
    img: BgImg,
    title: '银座三越',
    highLight: '支付立减¥30',
    btnFlag: true,
    footList: ['233个收藏', '性价比最高'],
  },
  {
    id: '3',
    img: BgImg,
    title: 'KojimaXBic Camera(昭岛购物）',
    footList: ['233个收藏', '性价比最高'],
  },
  {
    id: '4',
    img: BgImg,
    title: '银座三越',
    highLight: '支付立减¥30',
    btnFlag: true,
    footList: ['233个收藏', '性价比最高'],
  },
] as DataProps[];

const ListWaterfallPage: FC<PageProps> = () => {
  return (
    <div className={styles.listWaterfallStyle}>
      <Masonry elementType="div" style={{ margin: '0.16rem' }}>
        {data.map((item: DataProps) => (
          <div key={item?.id} className={styles.itemStyle} onClick={() => console.log(item)}>
            <img src={item?.img} alt="" className={styles.itemImg} />
            <div className={styles.contentStyle}>
              <div className={styles.titleContent}>
                <div className={styles.titleDiv}>
                  <div className={styles.itemTitle}>{item?.title}</div>
                  <div className={styles.highLight}>{item?.highLight}</div>
                </div>
                {item?.btnFlag && (
                  <Button
                    className={styles.btn}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(item);
                    }}
                  >
                    使用
                  </Button>
                )}
              </div>
              <div className={styles.itemSubTitle}>{item?.subTitle}</div>
              <div className={styles.footStyle}>
                {item?.avatar && <img src={item?.avatar} alt="" className={styles.avatarImg} />}
                {item?.footList &&
                  item?.footList.map((foot: string) => (
                    <span key={foot} className={styles.footList}>
                      {foot}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ListWaterfallPage;
