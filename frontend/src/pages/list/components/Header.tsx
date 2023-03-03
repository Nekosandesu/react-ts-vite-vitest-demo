import { ChangeEvent, useContext } from 'react';
import { BellOutlined, CheckOutlined, MenuOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';

import { SearchContext } from '../context/SearchContex';

const { Text } = Typography;

export default function ListHeader() {
  const { setKeywords } = useContext(SearchContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value.toLowerCase());
  };

  return (
    <div className="shop-header">
      <Text type="secondary" className="mr-2">
        <MenuOutlined />
      </Text>
      <Text type="secondary" className="mr-2">
        <BellOutlined />
      </Text>
      <Input placeholder="検索" className="mr-2" allowClear onChange={handleChange} />
      <Text type="secondary">
        <CheckOutlined />
      </Text>
    </div>
  );
}
