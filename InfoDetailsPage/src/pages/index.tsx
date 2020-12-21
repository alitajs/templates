import React, { FC } from 'react';
import { NoticeBar, Flex } from 'antd-mobile';
import styles from './index.less';
import EditImg from '../../assets/editImg.png';
import GoodImg from '../../assets/goodImg.png';
import CommentImg from '../../assets/commentImg.png';
import StarImg from '../../assets/starImg.png';

interface PageProps { }

const InfoDetailsPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <NoticeBar mode="link">专题：关于数字货币的一切</NoticeBar>
      <div className={styles.header}>
        <span className={styles.headerTitle}>数字货币交易所还是一门好生意么？</span>
        <span className={styles.headerAuthor}>熊猫侠讲书人</span>
        <span className={styles.headerDate}>11-21 07:30</span>
      </div>
      <div className={styles.content}>
        <div className={styles.dividerTop}>
          <div className={styles.dividerTopIcon} />
          <div className={styles.dividerTopLine} />
        </div>
        <span className={styles.articleIntroduce}>
          最近它又更新了一键海淘的功能，支持国外主流购物网站，就算你没有双币信用卡，没有国外账号
        </span>
        <div className={styles.dividerBottom}>
          <div className={styles.dividerBottomIcon} />
          <div className={styles.dividerBottomLine} />
        </div>
        <span className={styles.articleContent}>
          左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
        </span>
        <span className={styles.articleContent}>
          左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
        </span>
      </div>
      <Flex className={styles.bottom}>
        <img src={EditImg} alt="EditImg.png" className={styles.EditImg} />
        <span className={styles.comment}>写评论</span>
        <img src={CommentImg} alt="CommentImg.png" className={styles.CommentImg} />
        <span className={styles.commentNum}>9</span>
        <img src={GoodImg} alt="GoodImg.png" className={styles.GoodImg} />
        <img src={StarImg} alt="StarImg.png" className={styles.StarImg} />
      </Flex>
    </div>
  );
};

export default InfoDetailsPage;
