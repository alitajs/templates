import React, { FC } from 'react';
import { List, Button } from 'antd-mobile';
import styles from './index.less';
import PayCardVIPImg from '../../assets/payCardVIP.png';

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

interface PageProps { }

const PaymentCodePage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <img src={PayCardVIPImg} alt="" className={styles.vipHeader} />
      <div className={styles.collection}>
        <img src={BgImg} alt="" style={{ height: '1.68rem', margin: '0.26rem' }} />
        <div className={styles.cardNumber}>
          <span>2807</span>
          <span>******</span>
          <span>查看数字</span>
        </div>
        <img src={BgImg} alt="" style={{ height: '3.2rem', margin: '0.53rem 1.92rem' }} />
        <List className={styles.listStyle}>
          <Item thumb={BgImg} arrow="horizontal">
            招商银行储蓄卡（5419）
          </Item>
          <Item
            thumb={BgImg}
            extra={
              <Button type="ghost" size="small">
                一键用花呗
              </Button>
            }
          >
            用花呗大店小店够能付
          </Item>
        </List>
      </div>
    </div>
  );
};

export default PaymentCodePage;
