import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getItemDetail, Item } from '../../api/list';
import ErrorPage from '../../components/ErrorPage';

import GoodInfo from './components/GoodInfo';
import Header from './components/Header';
import Submit from './components/Submit';

export default function Detail() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: item,
    // id must exist because '/detail' will redirect to List page
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = useQuery<Item>('getItemDetail', () => getItemDetail(id!));

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="shop-container">
      <Header name={item?.name} />

      <GoodInfo isLoading={isLoading} item={item} />
      <Submit price={item?.price} shippingFee={item?.shipping_fee} />
    </div>
  );
}
