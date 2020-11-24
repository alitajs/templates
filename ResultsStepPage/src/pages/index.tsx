import React, { FC } from 'react';
import { Steps,Icon,List } from 'antd-mobile';
import styles from './index.less';
import Dot from '../../assets/dot.png'

const { Item } = List
const { Step } = Steps;

interface PageProps {}

const listData = [{
    id:1,
    content:"付款方式",
    extra:"招商银行信用卡(8800)"
},{
    id:2,
    content:"收款方",
    extra:"商家信息"
},{
    id:3,
    content:"宝贝核销信息",
    extra:"宝贝核销信息"
},] 
const ResultsStepPage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>完成</span>
      </div>
      <div className={styles.steps}>
        <Steps size="small" current={1}>
            <Step title="支付成功" description="辅助说明" icon={<Icon type="check-circle" color="#1677FF" />}/>
            <Step title="缴费单位处理中缴费单位处理中缴费单位处理中" status="wait " description="辅助说明辅助说明辅助说明辅助说明辅助说明" icon={<img src={Dot} className={styles.dot}></img>} />
            <Step title="到账提示" icon={<img src={Dot} className={styles.dot}></img>}/>
            <Step title="到账提示" icon={<img src={Dot} className={styles.dot}></img>} description="辅助说明" />
        </Steps>
      </div>
      <List className={styles.infoList}>
            {listData.map((val)=>(
                <Item  key={val.id}  extra={val.extra} >{val.content}</Item>
            ))}
      </List>
    </div>
  );
};

export default ResultsStepPage;
