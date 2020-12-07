import React, { FC } from 'react';
import { List, InputItem, Flex, Radio } from 'antd-mobile';
import { Button } from 'antd';
import styles from './index.less';

interface PageProps { }

const { Item } = List;
const BgImg = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const ExpressCreatePage: FC<PageProps> = () => {
  return (
    <div className={styles.container}>
      <List className={styles.placeList}>
        <Item>
          <InputItem
            clear
            placeholder="请填入寄件人信息"
            className={styles.InputItemStyle}
            extra={
              <Button className={styles.checkPlace} type="link">
                地址簿
              </Button>
            }
          >
            <Flex align="center" justify="start">
              <img src={BgImg} alt="" className={styles.placeListImg} />
              <span className={styles.placeListTitle}>寄件</span>
            </Flex>
          </InputItem>
        </Item>
        <Item>
          <InputItem
            clear
            placeholder="请填入收件人信息"
            className={styles.receivePlace}
            extra={
              <Button className={styles.checkPlace} type="link">
                地址簿
              </Button>
            }
          >
            <Flex align="center">
              <img src={BgImg} alt="" className={styles.placeListImg} />
              <span className={styles.placeListTitle}>收件</span>
            </Flex>
          </InputItem>
        </Item>
      </List>
      <img src={BgImg} alt="BgImg.png" className={styles.bannerImg} />
      <div className={styles.bottomPay}>
        <span className={styles.payWord}>预计费用：</span>
        <span className={styles.payNum}>&yen;25</span>
        <Flex align="center" style={{ marginTop: '0.13rem' }}>
          <Radio className={styles.agreeRadio}></Radio>
          <span className={styles.agreeWord}>同意</span>
          <Button type="link" className={styles.agreementBtn}>{`《快件运单协议》`}</Button>
        </Flex>
        <Button className={styles.submitBtn}>确认提交</Button>
      </div>
    </div>
  );
};

export default ExpressCreatePage;
