'use client';
import { useRouter } from 'next/navigation';
import { Input, Spacer, Button } from '@nextui-org/react';
import { AiOutlineSave } from 'react-icons/ai';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import axiosInstance from '../config/axios.config';
import apiEndpoints from '../config/apiEndpoints';
import { useState } from 'react';
import FormLoading from '../Components/FormLoading';

type Inputs = {
  title: string;
  quantity: number;
  price: number;
  image: string;
};

const CreatePage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post(apiEndpoints.PRODUCTS, data);
      toast.success(`Product ${res.data.name} Saved Successfully`);
      router.push('/');
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="max-w-lg shadow-lg mx-auto rounded bg-textColor p-7 mt-6">
        {loading ? (
          <>
            <FormLoading />
          </>
        ) : (
          <>
            <h2 className="font-semibold text-white text-center">
              Create a Products
            </h2>
            <Spacer y={4} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                isRequired
                type="text"
                {...register('title')}
                label="Enter Product Name"
              />
              <Spacer y={4} />
              <Input
                isRequired
                type="number"
                {...register('quantity')}
                label="Enter Product Quantity"
              />
              <Spacer y={4} />
              <Input
                isRequired
                type="number"
                {...register('price')}
                label="Enter Product Price"
              />
              <Spacer y={4} />
              <Input
                isRequired
                type="text"
                {...register('image')}
                label="Enter Image Url"
              />
              <Spacer y={4} />
              {loading ? (
                <>
                  <Button
                    isDisabled
                    isLoading
                    type="submit"
                    className="w-full "
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="submit"
                    className="w-full "
                    startContent={<AiOutlineSave />}
                  >
                    Save
                  </Button>
                </>
              )}
            </form>
          </>
        )}
      </section>
    </>
  );
};

export default CreatePage;
