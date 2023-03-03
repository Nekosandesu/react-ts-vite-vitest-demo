import { Button } from 'antd';

import style from '../Detail.module.scss';

interface SubmitProps {
  price?: number;
  shippingFee?: string;
}
export default function Submit({ price, shippingFee }: SubmitProps) {
  return (
    <div className={style.submit}>
      <div>
        <span>¥{price}</span>
        <span className="inline-block -translate-x-1 scale-75 text-xs">{shippingFee}</span>
      </div>
      <Button type="primary">購入手続きへ</Button>
    </div>
  );
}
