'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import axiosInstance from '../config/axios.config';
import apiEndpoints from '../config/apiEndpoints';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

type DataItems = {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
};

const ProductItems = ({ product }: { product: DataItems }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`${apiEndpoints.PRODUCTS}/${id}`);
      // console.log('product deleted', id);
      toast.success('Product Deleted Successfully.');
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const mutation = useMutation({
    mutationFn: handleDelete,
    onMutate: async (deletedData) => {
      await queryClient.cancelQueries({ queryKey: ['productsData'] });
      //Just get a snapshot
      const previousData = queryClient.getQueriesData(['productsData']);
      //Optimistically update the data
      queryClient.setQueryData(
        ['productsData'],
        previousData.filter((product) => product._id !== deletedData)
      );
      return { previousData };
    },
  });

  return (
    <>
      <Card isPressable isBlurred shadow="sm" className="py-4">
        <CardBody className="overflow-visible py-2">
          <Image
            alt={product.title}
            className="object-cover rounded-xl"
            src={product.image}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{product.title}</p>
          <small className="font-bold text-large">
            Quantity: {product.quantity}
          </small>
          <h4 className="font-bold text-large">Price: रु‎ {product.price}</h4>
        </CardHeader>
        <div className=" flex items-center justify-center gap-5 mt-4">
          <Link href={`/edit/${product._id}`}>
            <Button
              className="ms-3"
              color="success"
              startContent={<AiOutlineEdit />}
            >
              Edit Product
            </Button>
          </Link>

          <Button
            color="danger"
            startContent={<AiOutlineDelete />}
            onPress={onOpen}
          >
            Delete Product
          </Button>
          <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Confirm
                  </ModalHeader>
                  <ModalBody>
                    <p>Are you sure you want to delete the product ?</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      startContent={<MdOutlineCancel />}
                      color="danger"
                      variant="light"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      // onClick={() => handleDelete(product._id)}
                      onClick={() => mutation.mutate(product._id)}
                      startContent={<AiOutlineDelete />}
                      color="danger"
                      onPress={onClose}
                    >
                      Delete
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </Card>
    </>
  );
};

export default ProductItems;
