import React, { FC, useState } from 'react';
import styles from './index.less';
import { data } from '../../assets/data';

interface PageProps {}

const TreeCollapsePanel: FC<PageProps> = () => {
  const [treeData, setTreeData] = useState(data);

  const treeCollapsePanel = (data1: any[] = []) => {
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
            ? treeCollapsePanel(item.children)
            : ''}
        </div>
      );
    });
  };

  return <div className={styles.center}>{treeCollapsePanel(treeData)}</div>;
};

export default TreeCollapsePanel;
