import React, { FC } from 'react';
import { List, Flex, Button, Result } from 'antd-mobile';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const AlipayImg = "https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg";

const listData = [
  {
    id: 1,
    content: '招商银行信用卡(8800)',
    extra: '付款方式',
  },
  {
    id: 2,
    content: '商家信息',
    extra: '收款方',
  },
];
const ResultsPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button type="ghost">完成</Button>
      </div>
      <div className={styles.headerResult}>
        <Result
          img={<img src={AlipayImg} alt="" style={{ width: '.88rem', height: '.88rem' }} />}
          title="支付成功"
          message={
            <div className={styles.price}>
              <span>240.</span>
              <span>00</span>
            </div>
          }
        />
      </div>
      <List className={styles.infoList}>
        {listData.map((val) => (
          <Item key={val.id} extra={val.extra}>
            {val.content}
          </Item>
        ))}
      </List>
      <List renderHeader="本次消费获得" className={styles.cardsList}>
        <Flex direction="row" justify="around">
          <Flex.Item className={styles.flexItemStyle}>
            <span>约膜代金券</span>
            <div>
              <span>30</span>
              <span>元</span>
            </div>
            <Button>领取</Button>
          </Flex.Item>
          <Flex.Item className={styles.flexItemStyle}>
            <span>奖励金</span>
            <div>
              <span>2</span>
              <span>笔</span>
            </div>
            <Button>领取</Button>
          </Flex.Item>
          <Flex.Item className={styles.flexItemStyle}>
            <span>蚂蚁积分</span>
            <div>
              <span style={{ color: '#F65200' }}>2</span>
              <span style={{ color: '#F65200' }}>分</span>
            </div>
            <span>已有36800分</span>
          </Flex.Item>
        </Flex>
      </List>
    </div>
  );
};

export default ResultsPage;
