import { Result, Typography } from 'antd';

const { Text } = Typography;

interface ErrorPageProps {
  error: any;
}
export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <Result
      status="error"
      title="Some went wrong."
      extra={
        <div>
          <Text className="block">More details:</Text>
          <Text>{JSON.stringify(error)}</Text>
        </div>
      }
    />
  );
}
