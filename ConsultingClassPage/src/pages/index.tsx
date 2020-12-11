import React, { FC, useState, useEffect } from 'react';
import { Button, Badge, Flex } from 'antd-mobile';
import styles from './index.less';
interface PageProps { }
const ConsultingClassPage: FC<PageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  //模拟数据
  const data = [
    { desc: '失眠多梦', hot: false },
    { desc: '病毒性肝炎', hot: false },
    { desc: '慢性咽炎', hot: false },
    { desc: '高血压', hot: true },
    { desc: '2型糖尿病', hot: false },
    { desc: '皮肤过敏', hot: false },
  ]
  return (
    <div className={styles.center}>
      <div className={styles.headBtns}>
        <Flex wrap='wrap'
          justify='around'
          align="center" >
          {data.map((item, index) => {
            return <Button key={index} className={styles.btn} >
              <span>{item.desc}{item.hot ? <span className={styles.badge}>热</span> : ''}</span>
            </Button>
          })}
        </Flex>
      </div>
    </div>
  );
};
export default ConsultingClassPage;