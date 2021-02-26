import React, { FC, useState, useEffect } from 'react';
import styles from './index.less';
import { data } from '../../assets/data';

interface PageProps {}

const CollapsePanel: FC<PageProps> = () => {
  const [treeData, setTreeData] = useState(data);
  useEffect(() => {}, []);

  const renderCollapsePanel = (data1: any[] = []) => {
    return data1.map((item) => {
      return (
        <div className={styles.collapseItem} key={item.id}>
          <div
            className={styles.item}
            onClick={() => {
              item.isOpen = !item.isOpen;
              setTreeData(JSON.parse(JSON.stringify(treeData)));
            }}
          >
            {/* 这里请用icon代替 */}
            <span className={styles.icon}>
              {' '}
              <span>{item.isOpen ? '-' : '+'}</span>{' '}
            </span>
            <span className={styles.title}> {item.name}</span>
          </div>
          {!!item.isOpen && item.children && item.children.length > 0
            ? renderCollapsePanel(item.children)
            : ''}
        </div>
      );
    });
  };

  return <div className={styles.center}>{renderCollapsePanel(treeData)}</div>;
};

export default CollapsePanel;
