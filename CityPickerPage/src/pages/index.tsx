/* eslint-disable no-console */
import React, { FC, useState, useEffect, useRef } from 'react';
import { SearchBar, List } from 'antd-mobile';
import { pinyin } from 'pinyin-pro';
import CityData from '../public/city.json';
import { CityGrid, FirstCodeList, DataProps, FirstCodeProps } from '../components';
import styles from './index.less';

const { Item } = List;

interface PageProps {}

const CityPickerPage: FC<PageProps> = () => {
  const [searchValue, setSearchValue] = useState<string>(''); // 搜索输入框值
  const [cityData, setCityData] = useState({}); // 封装后的数据
  const [codeList, setCodeList] = useState<{ label: string | React.ReactNode; value: string }[]>(
    [],
  );

  const nowCityRef = useRef();
  const hotCityRef = useRef();

  /**
   * 页面初始化
   */
  useEffect(() => {
    const cData = {};
    CityData.forEach((item: any) => {
      const firstCode = pinyin(item.name, { pattern: 'initial' }).trim()[0];
      if (cData[firstCode]) {
        cData[firstCode].push(item);
      } else {
        cData[firstCode] = [{ ...item, firstCode }];
      }
    });

    const newData = {};
    const firList: ((prevState: never[]) => never[]) | { label: string; value: string }[] = [];
    firList.push({ label: '搜', value: 'search' });
    firList.push({ label: '热', value: 'hot' });
    Object.keys(cData)
      .sort()
      .forEach((key) => {
        newData[key] = cData[key];
        firList.push({
          label: key.toUpperCase(),
          value: key,
        });
      });
    setCodeList(firList);
    setCityData(newData);
  }, []);

  /**
   * 城市列表点击事件
   */
  const cityClick = (e: DataProps) => console.log(e);

  /**
   * 字母点击事件
   */
  const codeClick = (e: FirstCodeProps) => {
    const { value } = e;
    const labelNode = document.getElementById(`code-${value}`);
    if (labelNode) {
      labelNode.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar} id="code-search">
        <SearchBar
          placeholder="健康理财"
          value={searchValue}
          onChange={(e: string) => setSearchValue(e)}
          onSubmit={(e: string) => console.log(e)}
          onCancel={() => setSearchValue('')}
        />
      </div>
      <div className={styles.cityContainer}>
        <CityGrid
          cRef={nowCityRef}
          title="当前城市"
          data={[{ id: 'hangzhou', name: '杭州' }]}
          style={{ paddingTop: '0.24rem' }}
          onClick={(e: DataProps) => {
            console.log(e);
            if (hotCityRef && hotCityRef.current) hotCityRef.current.clear();
          }}
          current
        />
        <CityGrid
          cRef={hotCityRef}
          id="code-hot"
          title="热门城市"
          data={[
            { id: '1', names: '乌鲁木齐' },
            { id: '2', names: '北京' },
            { id: '3', names: '杭州' },
            { id: '4', names: '阿克苏' },
            { id: '5', names: '上海' },
            { id: '6', names: '西安' },
            { id: '7', names: '最多五个字最多五个字' },
            { id: '8', names: '香港' },
            { id: '9', names: '日本' },
          ]}
          style={{ paddingTop: '0.4rem' }}
          alias={{
            id: 'id',
            name: 'names',
          }}
          onClick={(e: DataProps) => {
            console.log(e);
            if (nowCityRef && nowCityRef.current) nowCityRef.current.clear();
          }}
        />
        <div className={styles.cityDataStyle}>
          {Object.keys(cityData).map((code) => (
            <React.Fragment key={code}>
              <div id={`code-${code}`} className={styles.cityCode}>
                {code.toUpperCase()}
              </div>
              <List>
                {(cityData[code] || []).map((item: DataProps) => (
                  <Item
                    key={`${code}-${item?.id}`}
                    onClick={() => {
                      cityClick(item);
                    }}
                  >
                    {item?.name}
                  </Item>
                ))}
              </List>
            </React.Fragment>
          ))}
        </div>
      </div>
      <FirstCodeList data={codeList} onClick={codeClick} />
    </div>
  );
};

export default CityPickerPage;
