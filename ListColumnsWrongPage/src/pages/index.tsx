import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const data = [
  { img: BgImg, allImg: true },
  {
    img: BgImg,
    title: '标题标题标题',
    desc: '描述描述',
    tip: '热卖',
    originalPrice: 80,
    realPrice: 45,
  },
  {
    img: BgImg,
    title: '标题标题标题标题标题标题标题标题标题标题标题标题',
    desc: '描述描述',
    tip: '新品上架',
    originalPrice: 80,
    realPrice: 45,
  },
];

const ListColumnsWrongPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        {data.map((item) => (
          <div className={styles.dataItem}>
            <div
              className={classnames({
                [styles.imgContainer]: true,
                [styles.fullHeight]: item?.allImg,
              })}
            >
              <img src={item?.img} alt="" className={styles.dataImg} />
              {item?.tip && <div className={styles.dataTip}>{item?.tip}</div>}
            </div>
            {!item?.allImg && (
              <div className={styles.textContainer}>
                <div>
                  <div className={styles.dataTitle}>{item?.title}</div>
                  <div className={styles.dataDesc}>{item?.desc}</div>
                </div>
                <div className={styles.price}>
                  <div className={styles.realPrice}>¥{item?.realPrice}</div>
                  <div className={styles.originalPrice}>¥{item?.originalPrice}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListColumnsWrongPage;
