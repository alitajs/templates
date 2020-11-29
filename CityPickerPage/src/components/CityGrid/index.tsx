import React, { FC, useState } from 'react';
import classnames from 'classnames';
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
}

const CityGrid: FC<CityGridProps> = (props) => {
  const { title = '', data = [], style, onClick, alias = { id: 'id', name: 'name' } } = props;
  const { id = 'id', name = 'name' } = alias;
  const [activeData, setActiveData] = useState<DataProps>({});

  const cityClick = (e: DataProps) => {
    setActiveData(e);
    if (onClick) onClick(e);
  };

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
            {cityItem[name]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityGrid;
