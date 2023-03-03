import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined, SearchOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';

const { Text } = Typography;

interface HeaderProps {
  name?: string;
}
export default function Header({ name }: HeaderProps) {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="shop-header">
      <Text type="secondary">
        <LeftOutlined onClick={goBack} />
      </Text>
      <Text type="secondary" strong>
        {name}
      </Text>
      <Space>
        <Text type="secondary">
          <SearchOutlined />
        </Text>
        <Text type="secondary">
          <ShareAltOutlined />
        </Text>
      </Space>
    </div>
  );
}
