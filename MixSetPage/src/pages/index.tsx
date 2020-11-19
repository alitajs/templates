import React, { FC, useState } from 'react';
import { List, Switch } from 'antd-mobile';
import styles from './index.less';

const { Item } = List;
interface PageProps {}

const MixSetPage: FC<PageProps> = () => {
  const [checked, setChecked] = useState(true);
  const listTopData = [
    {
      id: 0,
      content: '标题文字',
      extra: '描述文字',
    },
    {
      id: 1,
      content: '标题文字',
      extra: '',
    },
    {
      id: 2,
      content: '标题文字',
      extra: '',
    },
    {
      id: 3,
      content: '标题文字',
      extra: '描述文字',
    },
    {
      id: 4,
      content: '标题文字',
      extra: '',
    },
  ];
  const listMiddleData = [
    {
      id: 0,
      content: '标题文字',
      extra: '描述文字',
    },
    {
      id: 1,
      content: '标题文字',
      extra: '',
    },
    {
      id: 2,
      content: '标题文字',
      extra: '',
    },
    {
      id: 3,
      content: '标题文字',
      extra: '描述文字',
    },
  ];
  const listBottomData = [
    {
      id: 0,
      content: '标题文字',
      extra: '描述文字',
    },
    {
      id: 1,
      content: '标题文字',
      extra: '',
    },
    {
      id: 2,
      content: '标题文字',
      extra: '',
    },
    {
      id: 3,
      content: '标题文字',
      extra: '描述文字',
    },
  ];
  return (
    <div className={styles.container}>
      <List style={{ marginTop: '12px' }}>
        <Item
          extra="详细信息"
          arrow="horizontal"
          key="0"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        >
          账号管理
        </Item>
        <Item
          arrow="horizontal"
          key="1"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        >
          安全中心
        </Item>
        <Item
          extra="153******38"
          arrow="horizontal"
          key="2"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        >
          手机号
        </Item>
      </List>
      <List
        renderHeader={() => '小标题描述'}
        renderFooter={() => '关闭后,其他用户再转账,收款,添加朋友时将不能通过手机号/会员名搜索到你'}
      >
        {listTopData.map((value) => (
          <Item
            extra={value.extra}
            arrow="horizontal"
            key={value.id}
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          >
            {value.content}
          </Item>
        ))}
        <Item
          extra={
            <Switch
              color="#1677FF"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          }
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
        >
          标题文字
        </Item>
      </List>
      <List
        renderFooter={() => '关闭后,其他用户再转账,收款,添加朋友时将不能通过手机号/会员名搜索到你'}
      >
        {listMiddleData.map((value) => (
          <Item
            extra={value.extra}
            arrow="horizontal"
            key={value.id}
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          >
            {value.content}
          </Item>
        ))}
      </List>
      <List renderHeader={() => '小标题描述'}>
        {listBottomData.map((value) => (
          <Item
            extra={value.extra}
            arrow="horizontal"
            key={value.id}
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          >
            {value.content}
          </Item>
        ))}
      </List>
    </div>
  );
};

export default MixSetPage;
