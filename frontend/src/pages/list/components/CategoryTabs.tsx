import { useCallback, useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import { Space, Spin, Typography } from 'antd';

import { Category, getCategories } from '../../../api/list';
import { CategoryContext } from '../context/CategoryContext';

import style from '../List.module.scss';

const { Text } = Typography;

export default function CategoryTabs() {
  const { categoryId, setCategoryId } = useContext(CategoryContext);
  const {
    isLoading,
    error,
    data = [],
  } = useQuery<Array<Category>>('repoData', () => getCategories());

  const categories = useMemo<Array<Category>>(
    () => [{ id: '0', name: 'すべて' }].concat(data),
    [data]
  );

  if (error) {
    return <Text>something went wrong</Text>;
  }
  const switchCategory = useCallback((id: string) => {
    setCategoryId(id);
  }, []);

  return (
    <Spin spinning={isLoading}>
      <Space size="large" className={style.tabBar}>
        {categories.map(({ id, name }) => (
          <span
            key={id}
            onClick={() => switchCategory(id)}
            className={id === categoryId ? style.active : ''}
          >
            {name}
          </span>
        ))}
      </Space>
    </Spin>
  );
}
