/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import { SearchBar, Carousel, List } from 'antd-mobile';
import classnames from 'classnames';
import { FoodItem } from '../components';
import styles from './index.less';

const { Item } = List;

interface PageProps {}

const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';

const carouselData = Array.from(new Array(3)).map((item, i) => ({
  id: i,
  img: BgImg,
}));

const foodList = Array.from(new Array(10)).map((item, i) => ({
  id: `food-${i}`,
  img: BgImg,
  title: '现切压沙瓜',
  subTitle: '1份/净肉约800g',
  monthSale: 100,
  upNum: 18,
  tip: '杭州美食排行第一',
  amount: 420,
}));

const categoryList = Array.from(new Array(6)).map((item, i) => ({
  categoryId: `category-${i + 1}`,
  name: `项目${i + 1}`,
  data: foodList,
}));

const CategoryListPage: FC<PageProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeCategoryId, setactiveCategoryId] = useState<string | number>('category-1'); // 当前类目
  const [listenCategoryId, setListenCategoryId] = useState<string | number>(); // 监听点击的类目id
  const [touchFlag, setTouchFlag] = useState<boolean>(true); // false: 点击类目，true: 右侧滚动移动

  /**
   * 左侧类目点击事件
   */
  const categoryClick = (id: string | number) => {
    setListenCategoryId(id);
    setactiveCategoryId(id);
    const labelNode = document.getElementById(`categoryId-${id}`);
    if (labelNode) {
      labelNode.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * 右侧滚动事件
   */
  const rightScroll = () => {
    const node = document.getElementById('allProductId');
    categoryList.forEach((item) => {
      const nowNode = document.getElementById(`categoryId-${item.categoryId}`);
      if (
        nowNode &&
        node &&
        nowNode.getBoundingClientRect()?.y - node.getBoundingClientRect()?.y < 50
      ) {
        if (touchFlag) {
          setactiveCategoryId(item.categoryId);
        } else if (listenCategoryId === item.categoryId) {
          setactiveCategoryId(item.categoryId);
          setListenCategoryId('');
        }
        setListenCategoryId('');
      }
    });
  };

  return (
    <div className={styles.categoryListPageStyle}>
      <div className={styles.searchStyle}>
        <div className={styles.addr}>西湖区阿里 Z空间地区</div>
        <div className={styles.search}>
          <SearchBar
            placeholder="健康理财"
            value={searchValue}
            onChange={(e: string) => setSearchValue(e)}
            onCancel={(e: string) => console.log(e)}
            onSubmit={(e: string) => console.log(e)}
            cancelText="搜索"
          />
        </div>
      </div>
      <div className={styles.carouselStyle}>
        <Carousel
          autoplay={false}
          infinite
          dotStyle={{
            width: '.06rem',
            height: '.06rem',
            background: '#FFFFFF',
            opacity: 0.4,
          }}
          dotActiveStyle={{
            width: '.24rem',
            height: '.07rem',
            background: '#FFFFFF',
          }}
        >
          {carouselData.map((item) => (
            <img
              key={item?.id}
              src={item?.img}
              alt=""
              className={styles.carouselImg}
              onClick={() => console.log(item)}
            />
          ))}
        </Carousel>
      </div>
      <div className={styles.allProductStyle} id="allProductId">
        <div className={styles.leftList} onTouchStart={() => setTouchFlag(false)}>
          {categoryList.map((item) => (
            <div
              key={item.categoryId}
              className={styles.categoryContent}
              onClick={() => categoryClick(item?.categoryId)}
            >
              {item.categoryId === activeCategoryId && (
                <div className={styles.activeLine}>
                  <div className={styles.line} />
                </div>
              )}
              <div
                className={classnames({
                  [styles.categoryName]: true,
                  [styles.categoryNameActive]: item.categoryId === activeCategoryId,
                })}
              >
                {item?.name}
              </div>
            </div>
          ))}
        </div>
        <div
          className={styles.rightList}
          onScroll={rightScroll}
          onTouchStart={() => setTouchFlag(true)}
        >
          {categoryList.map((categoryItem) => (
            <List key={categoryItem.categoryId} id={`categoryId-${categoryItem.categoryId}`}>
              {categoryItem.data.map((item) => (
                <Item>
                  <FoodItem data={item} categoryId={categoryItem.categoryId} />
                </Item>
              ))}
            </List>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryListPage;
