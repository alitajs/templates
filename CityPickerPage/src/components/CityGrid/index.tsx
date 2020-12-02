import React, { FC, useState, useImperativeHandle } from 'react';
import classnames from 'classnames';
import CurrentPng from '../../assets/place.png';
import styles from './index.less';

export interface DataProps {
  [res: string]: string;
}

export interface CityGridProps {
  id?: string;
  title: string;
  data?: DataProps[];
  onClick?: (res: DataProps) => void;
  style?: React.CSSProperties;
  alias?: DataProps;
  cRef?: any;
  current?: boolean;
}

const CityGrid: FC<CityGridProps> = (props) => {
  const {
    title = '',
    data = [],
    style,
    onClick,
    alias = { id: 'id', name: 'name' },
    cRef,
    current = false,
  } = props;
  const { id = 'id', name = 'name' } = alias;
  const [activeData, setActiveData] = useState<DataProps>({});

  const cityClick = (e: DataProps) => {
    setActiveData(e);
    if (onClick) onClick(e);
  };

  useImperativeHandle(cRef, () => ({
    // click 就是暴露给父组件的方法
    clear: () => {
      setActiveData({});
    },
  }));

  return (
    <div className={styles.cityGridStyle} style={style} id={props?.id}>
      <div className={styles.cityGridTitle}>{title}</div>
      <div className={styles.cityData}>
        {data?.map((cityItem: DataProps) => (
          <div
            key={cityItem[id]}
            className={classnames({
              [styles.city]: true,
              [styles.activeCity]: activeData[id] === cityItem[id],
            })}
            onClick={() => cityClick(cityItem)}
          >
            {current && <img src={CurrentPng} alt="" className={styles.currentImg} />}
            {cityItem[name]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityGrid;
