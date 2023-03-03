import { useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { HeartOutlined } from '@ant-design/icons';
import { Spin, Typography } from 'antd';

import { getItems, Item } from '../../../api/list';
import ErrorPage from '../../../components/ErrorPage';
import { CategoryContext } from '../context/CategoryContext';
import { SearchContext } from '../context/SearchContex';

import style from '../List.module.scss';

const { Text } = Typography;

export default function CardList() {
  const navigate = useNavigate();
  const { keywords } = useContext(SearchContext);
  const { categoryId } = useContext(CategoryContext);
  const {
    isLoading,
    error,
    data: items = [],
  } = useQuery<Array<Item>>('getItems', () => getItems());

  const showedItems = useMemo(() => {
    return items.filter(({ name, category_id }) => {
      const includeKeywords = name.toLowerCase().includes(keywords);
      let belongCategory = true;
      if (categoryId !== '0') {
        belongCategory = +categoryId === category_id;
      }
      return includeKeywords && belongCategory;
    });
  }, [keywords, categoryId, items]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return isLoading ? (
    // Can't use as a container because its nested divs will break down the layout
    <Spin spinning={true} className={style.spin} />
  ) : (
    <div className={style.listContent}>
      {showedItems.map(({ id, name, image, is_sold_out, price, like_count }) => (
        <div key={id} className={style.card} onClick={() => goDetail(id)}>
          {is_sold_out && <div className={style.soldClass}>SOLD</div>}

          <img src={image} alt={name} style={{ width: '100%' }} />

          <div className="p-2">
            <Text type="secondary" className="... block truncate">
              {name}
            </Text>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text>¥{price}</Text>
              {like_count && (
                <Text type="secondary">
                  <HeartOutlined className="mr-1" />
                  {like_count}
                </Text>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
