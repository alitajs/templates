import React, { FC } from 'react';
import { Steps, Icon, List, Flex, Button } from 'antd-mobile';
import styles from './index.less';
import Dot from '../../assets/dot.png';

const { Item } = List;
const { Step } = Steps;

interface PageProps {}

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
  {
    id: 3,
    content: '宝贝信息',
    extra: '宝贝核销信息',
  },
];

const ResultsStepPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button type="ghost">完成</Button>
      </div>
      <div className={styles.steps}>
        <Steps size="small" current={0}>
          <Step
            title="支付成功"
            description="辅助说明"
            icon={<Icon type="check-circle" color="#1677FF" />}
          />
          <Step
            title="缴费单位处理中缴费单位处理中缴费单位处理中"
            description="辅助说明辅助说明辅助说明辅助说明辅助说明"
            icon={<img src={Dot} className={styles.dot} alt="dot img" />}
          />
          <Step title="到账提示" icon={<img src={Dot} className={styles.dot} alt="dot img" />} />
          <Step
            title="到账提示"
            icon={<img src={Dot} className={styles.dot} alt="dot img" />}
            description="辅助说明"
          />
        </Steps>
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

export default ResultsStepPage;
