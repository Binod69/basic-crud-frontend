'use client';
import { useQuery } from 'react-query';
import axiosInstance from '../config/axios.config';
import apiEndpoints from '../config/apiEndpoints';
import ProductItems from './ProductItems';
import Loading from '../loading';

type DataItems = {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
};

const Products = () => {
  const { isLoading, error, data } = useQuery('productsData', () =>
    axiosInstance.get(apiEndpoints.PRODUCTS).then((res) => res.data)
  );

  if (isLoading)
    return (
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        <Loading card={8} />
      </div>
    );

  if (error)
    return (
      <>
        <p className=" text-red-500">Something went wrong.Try again later</p>
        {error}
      </>
    );
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            {data.map((items: DataItems) => (
              <ProductItems key={items._id} product={items} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div>Currently these is no products available</div>
        </>
      )}
    </>
  );
};

export default Products;
