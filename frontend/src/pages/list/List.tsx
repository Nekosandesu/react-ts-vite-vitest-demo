import { CameraFilled } from '@ant-design/icons';
import { Typography } from 'antd';

import CardList from './components/CardList';
import CategoryTabs from './components/CategoryTabs';
import Header from './components/Header';
import { CategoryContextProvider } from './context/CategoryContext';
import { SearchContextProvider } from './context/SearchContex';

import style from './List.module.scss';

const { Text } = Typography;

export default function List() {
  return (
    <div className="shop-container">
      <SearchContextProvider>
        <CategoryContextProvider>
          <Header />
          <div className="shop-content">
            <CategoryTabs />
            <div className={style.list}>
              <CardList />
            </div>
          </div>

          <div className={style.create}>
            <Text className="text-white	text-xs">出品</Text>
            <CameraFilled className="block text-4xl" />
          </div>
        </CategoryContextProvider>
      </SearchContextProvider>
    </div>
  );
}
