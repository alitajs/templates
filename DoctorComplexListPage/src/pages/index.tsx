import React, { FC } from 'react';
import { List, Flex, Badge } from 'antd-mobile';
import styles from './index.less';
import StarImg from '../../assets/starImg.png';

interface PageProps { }
const { Item } = List;
const AvatarImg = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';

const DoctorComplexListPage: FC<PageProps> = () => {
  return (
    <div className={styles.ListStyle}>
      <List>
        <Item thumb={AvatarImg}>
          <Flex direction="column" align="start">
            <Flex style={{ marginBottom: '0.08rem' }}>
              <span className={styles.doctorName}>张豆豆</span>
              <span className={styles.doctorIdentity}>主任医生</span>
            </Flex>
            <span className={styles.place}>北京协和医院 骨科</span>
            <span className={styles.treatmentContent}>擅长: 儿童及成人内分泌疾病, 甲状腺疾病</span>
            <Flex align="center" style={{ marginBottom: '0.16rem' }}>
              <Badge
                text="顶"
                style={{
                  display:'block',
                  padding: '0 0.02rem',
                  height: '0.3rem',
                  lineHeight: '0.3rem',
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  color: '#FF6010',
                  border: '1px solid #FF6010',
                }}
              />
              <span className={styles.labelIntroduce}>顶级医院</span>
              <Badge
                text="快"
                style={{
                  padding: '0 0.02rem',
                  height: '0.3rem',
                  lineHeight: '0.3rem',
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  color: '#00B578',
                  border: '1px solid #00B578',
                }}
              />
              <span className={styles.labelIntroduce}>快速响应</span>
              <Badge
                text="快"
                style={{
                  padding: '0 0.02rem',
                  height: '0.3rem',
                  lineHeight: '0.3rem',
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  color: '#00B578',
                  border: '1px solid #00B578',
                }}
              />
              <span className={styles.labelIntroduce}>优质服务</span>
            </Flex>
          </Flex>
        </Item>
        <Item style={{ marginLeft: '1.32rem' }}>
          <Flex style={{ marginBottom: '0.16rem' }}>
            <img src={StarImg} alt="starImg.png" className={styles.StarImg} />
            <span className={styles.StarNum}>4.0</span>
            <span className={styles.comment}>2400条问题，90%好评</span>
          </Flex>
          <Flex>
            <span className={styles.price}>¥20</span>
            <span className={styles.service}>图文</span>
            <span className={styles.price}>¥60</span>
            <span className={styles.service}>电话</span>
            <span className={styles.price}>¥80</span>
            <span className={styles.service}>挂号</span>
          </Flex>
        </Item>
      </List>
    </div>
  );
};

export default DoctorComplexListPage;
