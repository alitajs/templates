import React, { FC } from 'react';
import { Flex, Button } from 'antd-mobile';
import styles from './index.less';
import TriangleImg from '../../assets/triangleImg.png';
import CloverImg from '../../assets/cloverImg.png';

interface PageProps { }
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const InfoImageDetailsPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>数字货币交易所还是一门好生意么？</span>
      </div>
      <Flex className={styles.content} direction="column" align="start">
        <span className={styles.contentTitle}>二级标题</span>
        <span className={styles.contentIntroduce}>
          左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
        </span>
        <span className={styles.contentTitle}>二级标题</span>
        <span className={styles.contentIntroduce}>
          左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
        </span>
        <img src={BgImg} alt="BgImg.png" style={{ width: '100%' }} />
        <Flex align="end" style={{ marginTop: '0.24rem', marginBottom: '0.4rem' }}>
          <img src={TriangleImg} alt="TriangleImg.png" className={styles.introduceIcon} />
          <span className={styles.imgIntroduce}>2018年上海外滩全景图</span>
        </Flex>
        <span className={styles.contentIntroduce}>
          左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
        </span>
        <img src={BgImg} alt="BgImg.png" style={{ height: '3.85rem', width: '100%' }} />
        <Flex align="end" style={{ marginTop: '0.24rem', marginBottom: '0.4rem' }}>
          <img src={TriangleImg} alt="TriangleImg.png" className={styles.introduceIcon} />
          <span className={styles.imgIntroduce}>2018年上海外滩全景图</span>
        </Flex>
        <Flex style={{ marginBottom: '0.4rem' }}>
          <span className={styles.authorOriginLeft}>熊猫侠讲书人</span>
          <span className={styles.authorOriginRight}>杂说</span>
        </Flex>
        <span className={styles.Copyright}>
          版权声明：本内容由＊＊＊（注：源名称）授权支付宝发布，如果有任何疑问请与＊＊＊联系。
        </span>
      </Flex>
      <Flex direction="column" className={styles.bottom} justify="center">
        <img src={CloverImg} alt="CloverImg.png" className={styles.CloverImg} />
        <span className={styles.bottomCardTitle}>杭州市城市服务</span>
        <span className={styles.bottomCardIntroduce}>杭州市民办事儿一招搞定</span>
        <Button className={styles.bottomCardButton}>查看</Button>
      </Flex>
    </div>
  );
};

export default InfoImageDetailsPage;
