import { FlagFilled, HeartOutlined, MessageOutlined } from '@ant-design/icons';
import { Spin, Typography } from 'antd';

import { Item } from '../../../api/list';

import style from '../Detail.module.scss';

const { Text } = Typography;

interface GoodInfoProps {
  isLoading: boolean;
  item?: Item;
}
export default function GoodInfo({ isLoading, item }: GoodInfoProps) {
  return isLoading ? (
    <Spin spinning={true} className={style.spin} />
  ) : (
    // Can use as a container because its nested divs will break down the layout
    <div className={`shop-content ${style.content}`}>
      <img src={item?.image} alt={item?.name} />
      <div className="mb-1 p-2">
        <Text className="mb-4 block">{item?.name}</Text>
        <Text type="secondary" className="flex justify-between">
          <div>
            <span className="mr-1 inline-block rounded-2xl bg-gray-100 p-1 pl-2">
              <HeartOutlined />
              <span className="text-xs">いいね！</span>
            </span>
            <Text>{item?.like_count}</Text>

            <span className="mr-1 ml-4 inline-block rounded-2xl bg-gray-100 p-1 px-2">
              <MessageOutlined />
              <span className="text-xs">コメント</span>
            </span>
          </div>

          <span className="mr-1 inline-block rounded-2xl bg-gray-100 p-1 px-2">
            <FlagFilled />
          </span>
        </Text>
      </div>

      <Text type="secondary" className="block bg-gray-100 p-2 text-xs">
        商品の説明
      </Text>
      <Text className="block p-2">{item?.description}</Text>
    </div>
  );
}
