'use client';
import Link from 'next/link';
import { useQuery } from 'react-query';
import axiosInstance from '../config/axios.config';
import apiEndpoints from '../config/apiEndpoints';
import { Button } from '@nextui-org/react';
import { AiOutlineEdit } from 'react-icons/ai';
import ProductItems from './ProductItems';
import Loading from '../loading';
import CreateBtn from './ui/CreateBtn';

interface DataItems {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const Products = () => {
  const { isLoading, error, data } = useQuery('productsData', () =>
    axiosInstance.get(apiEndpoints.PRODUCTS).then((res) => res.data)
  );

  if (isLoading)
    return (
      <>
        <Loading />
      </>
    );

  if (error)
    return (
      <>
        <p className=" text-red-500">error</p> + error.message
      </>
    );
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            {data.map((items: DataItems) => (
              //   <Card key={item.id} isBlurred shadow="sm" className="py-4">
              //     <CardBody className="overflow-visible py-2">
              //       <Image
              //         alt={item.name}
              //         className="object-cover rounded-xl"
              //         src={item.image}
              //         width={270}
              //       />
              //     </CardBody>
              //     <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              //       <p className="text-tiny uppercase font-bold">{item.name}</p>
              //       <small className="text-default-500">
              //         Quantity: {item.quantity}
              //       </small>
              //       <h4 className="font-bold text-large">Price: {item.price}</h4>
              //     </CardHeader>
              //     <div className=" flex items-center justify-evenly mt-4">
              //       <Button color="success" startContent={<AiOutlineEdit />}>
              //         Edit Product
              //       </Button>
              //       <Button color="danger" startContent={<AiOutlineDelete />}>
              //         Delete Product
              //       </Button>
              //     </div>
              //   </Card>
              <ProductItems key={items.id} data={items} />
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
