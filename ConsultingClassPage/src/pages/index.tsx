import React, { FC, useState, useEffect } from 'react';
import { Button, Badge, Flex } from 'antd-mobile';
import styles from './index.less';


interface PageProps {
}




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
            return <Button key={index} className={styles.btn} ><span>{item.desc}{item.hot ? <Badge text="热" hot 
            style={{
              marginLeft: 8,
              marginBottom:5,
              padding: '1px',
              backgroundColor: '#fff',
              borderRadius: 5,
              color: '#f19736',
              border: '1px solid #FF6010',
              height:'30px',
              width:'25px',
              fontSize:'22px',
              fontWeight:400,
              lineHeight:'30px'
            }} 
            /> : ''}</span></Button>
          })}
        </Flex>






      </div>
    </div>
  );
};


export default ConsultingClassPage;