import apiEndpoints from '../config/apiEndpoints';
import axiosInstance from '../config/axios.config';

const EditProductsComp = async (id: string) => {
  const res = await axiosInstance.get(apiEndpoints.PRODUCTS + '/' + id);
  if (!res) throw new Error('failed to fetch data');
  return <div>EditProductsComp</div>;
};

export default EditProductsComp;
