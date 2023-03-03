import { message } from 'antd';
import axios from 'axios';

const axiosIns = axios.create({
  timeout: 30000,
});

axiosIns.interceptors.response.use(
  (res) => {
    if (res.status !== 200) {
      message.error('Something went wrong, please try later.');
    }
    return res.data;
  },
  (error) => Promise.reject(error)
);

/**
 * @param opt
 *  opt {
 *    method: get default
 *    data: {}, get to attach to url, post to data
 *    headers: {}
 *    timeout: 10000ms default
 *  }
 * @returns {AxiosPromise<any>}
 */
const http = async (opt = {}): Promise<any> => {
  const options = { ...opt };
  let res;
  try {
    res = await axiosIns.request(options);
    if (res.data) res = res.data;
    return res;
  } catch (error) {
    message.error(`Something went wrong, please try later. More details: ${error}`);
  }
};

export default http;
