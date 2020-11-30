import React, { FC, useState } from 'react';
import classnames from 'classnames';
import styles from './index.less';

export interface FirstCodeProps {
  label: string | React.ReactNode;
  value: string;
}

export interface FirstCodeListProps {
  data: FirstCodeProps[];
  onClick?: (res: FirstCodeProps) => void;
}

const FirstCodeList: FC<FirstCodeListProps> = (props) => {
  const [activeCode, setActiveCode] = useState<FirstCodeProps>();
  const [showheight, setShowHeight] = useState<number>();
  const { data = [], onClick } = props;

  const codeClick = (e: FirstCodeProps) => {
    const { value = '' } = e;
    const top = document.getElementById(`f-${value}`)?.getBoundingClientRect()?.y || 0;
    setActiveCode(e);
    if (onClick) onClick(e);
    setShowHeight(top - 47);
    setTimeout(() => {
      setShowHeight(0);
    }, 1000);
  };
  return (
    <div className={styles.codeFixed}>
      <div className={styles.codeList}>
        {(data || []).map((code) => (
          <div
            key={code?.value}
            id={`f-${code?.value}`}
            className={classnames({
              [styles.cityFirstCode]: true,
              [styles.cityFirstCodeActive]: code?.value === activeCode?.value && showheight !== 0,
            })}
            onClick={() => codeClick(code)}
          >
            {code?.label}
          </div>
        ))}
      </div>
      {showheight !== 0 && (
        <div className={styles.activeCodeStyle} style={{ top: showheight }}>
          {activeCode?.label}
        </div>
      )}
    </div>
  );
};

export default FirstCodeList;
