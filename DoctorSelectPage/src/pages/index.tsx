import React, { FC } from 'react';
import { Grid } from 'antd-mobile';
import styles from './index.less';
import addImg from '../../assets/add.png'
interface PageProps {}
const DoctorSelectPage: FC<PageProps> = () => {
  //模拟数据
  const data = [
    {
      name: '徐玲',
      subjects: '骨科',
      icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image'
    },
    {
      name: '庞然',
      subjects: '男科',
      icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image'
    },
    {
      name: '迟慧艳',
      subjects: '儿科',
      icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image'
    },
    {
      name: '梁晓军',
      subjects: '内科',
      icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image'
    },
    {
      name: '添加',
      subjects: '',
      icon: addImg
    }
  ]
  return (
    <div className={styles.center}>
      <div className={styles.wrap}>
        <Grid
          className={styles.grid}
          data={data}
          columnNum={5}
          hasLine={false}
          square={false}
          renderItem={dataItem => (
            <div >
              <img src={dataItem.icon} className={styles.gridItemImg} alt="" />
              <div className={styles.gridItemName}>
                <span>{dataItem.name}</span>
              </div>
              <div className={styles.gridItemSubjects}>
                <span>{dataItem.subjects}</span>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
export default DoctorSelectPage;