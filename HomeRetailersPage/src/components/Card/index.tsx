import React, { FC } from 'react';
import RightPng from '../../assets/right.png';

import styles from './index.less';

interface CardProps {
  title: string;
  subTitle?: string | React.ReactNode;
}

const Card: FC<CardProps> = ({ children, title, subTitle }) => (
  <div className={styles.cardStyle}>
    <div className={styles.cardContent}>
      <div className={styles.cardHead}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardSubTitle}>{subTitle}</div>
        <img src={RightPng} alt="" className={styles.rightImg} />
      </div>
      {children}
    </div>
  </div>
);

export default Card;
