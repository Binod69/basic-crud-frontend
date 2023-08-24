import apiEndpoints from '../config/apiEndpoints';
import axiosInstance from '../config/axios.config';

const EditProductsComp = async (_id: string) => {
  const res = await axiosInstance.get(apiEndpoints.PRODUCTS + '/' + _id);
  if (!res) throw new Error('failed to fetch data');
  return <div>EditProductsComp</div>;
};

export default EditProductsComp;
