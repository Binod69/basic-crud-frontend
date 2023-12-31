'use client';
import { useRouter } from 'next/navigation';
import apiEndpoints from '../../config/apiEndpoints';
import axiosInstance from '../../config/axios.config';
import { useQuery } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Spacer, Button } from '@nextui-org/react';
import { MdUpdate } from 'react-icons/md';
import toast from 'react-hot-toast';
import FormLoading from '@/app/Components/FormLoading';

type Params = {
  params: {
    id: string;
  };
};

type EditProps = {
  title: string;
  price: string;
  quantity: string;
  image: string;
};
const EditProducts = ({ params: { id } }: Params) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<EditProps>();
  const { isLoading, error, data } = useQuery<EditProps>('editProduct', () =>
    axiosInstance.get(`${apiEndpoints.PRODUCTS}/${id}`).then((res) => res.data)
  );
  console.log(data);

  const onSubmit: SubmitHandler<EditProps> = async (data) => {
    try {
      await axiosInstance.put(`${apiEndpoints.PRODUCTS}/${id}`, data);
      toast.success('Product updated successfully');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading || !data) {
    return (
      <>
        <FormLoading />
      </>
    );
  }
  if (error) {
    return (
      <>
        <p>{`${error}`}</p>
      </>
    );
  }

  return (
    <>
      <section className="max-w-lg shadow-lg mx-auto rounded  p-7 mt-6 ">
        <h2 className="font-semibold text-textColor text-center">
          Update a Products - {data.title}
        </h2>
        <Spacer y={4} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            isRequired
            type="text"
            defaultValue={data.title}
            {...register('title')}
            label="Enter Product Name"
          />
          <Spacer y={4} />
          <Input
            isRequired
            type="number"
            defaultValue={data.quantity}
            {...register('quantity')}
            label="Enter Product Quantity"
          />
          <Spacer y={4} />
          <Input
            isRequired
            type="number"
            defaultValue={data.price}
            {...register('price')}
            label="Enter Product Price"
          />
          <Spacer y={4} />
          <Input
            isRequired
            type="text"
            defaultValue={data.image}
            {...register('image')}
            label="Enter Image Url"
          />
          <Spacer y={4} />
          {isLoading ? (
            <>
              <Button
                isDisabled
                isLoading
                type="submit"
                className="w-full "
                startContent={<MdUpdate />}
              >
                Update
              </Button>
            </>
          ) : (
            <>
              <Button
                type="submit"
                className="w-full "
                startContent={<MdUpdate />}
              >
                Update
              </Button>
            </>
          )}
        </form>
      </section>
    </>
  );
};

export default EditProducts;
