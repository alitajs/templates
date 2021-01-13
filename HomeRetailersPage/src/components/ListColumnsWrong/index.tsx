import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface ListColumnsWrongProps {
  id: string;
  img: string;
  title?: string;
  desc?: string;
  tip?: string;
  originalPrice?: number;
  realPrice?: number;
  allImg?: boolean;
}

interface PageProps {
  data: ListColumnsWrongProps[];
  itemClick: (e: ListColumnsWrongProps) => void;
}

const ListColumnsWrongPage: FC<PageProps> = ({ data = [], itemClick }) => {
  return (
    <div className={styles.listColumnsWrongStyle}>
      <div className={styles.listContainer}>
        {data.map((item) => (
          <div className={styles.dataItem} key={item?.id} onClick={() => itemClick(item)}>
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
