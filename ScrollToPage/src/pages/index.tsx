import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface PageProps {}

const ScrollToPage: FC<PageProps> = () => {
  const [scrollToId, setScrollToId] = useState<string>('');
  useEffect(() => {}, []);
  /**
   * id首字母要用英文开头
   */
  const data = [
    {
      label: '锚点01',
      id: 'a01',
    },
    {
      label: '锚点02',
      id: 'a02',
    },
    {
      label: '锚点03',
      id: 'a03',
    },
    {
      label: '锚点04',
      id: 'a04',
    },
    {
      label: '锚点05',
      id: 'a05',
    },
    {
      label: '锚点06',
      id: 'a06',
    },
    {
      label: '锚点07',
      id: 'a07',
    },
  ];

  const scrollIntoView = (item: any) => {
    setScrollToId(item.id);
    document.querySelector(`#${item.id}`)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scrollToView}>
      <div
        className={classnames({
          [`${styles.card}`]: true,
          [`${styles.cardMain}`]: true,
        })}
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={classnames({
                [`${styles.item}`]: true,
                [`${styles.active}`]: scrollToId === item.id,
              })}
              onClick={() => {
                scrollIntoView(item);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      {data.map((item) => {
        return (
          <div key={item.id} id={item.id} className={styles.card}>
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollToPage;
