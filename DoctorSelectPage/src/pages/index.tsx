import React, { FC, useState, useEffect } from 'react';

import styles from './index.less';

interface PageProps {
}


const DoctorSelectPage: FC<PageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  

  return (
    <div className={styles.center}>
      <div className={styles.headBtns}>
      

      </div>
    </div>
  );
};

export default DoctorSelectPage;
