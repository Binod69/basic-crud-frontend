'use client';
import React from 'react';
import { Card, CardHeader, CardBody, Image, Button } from '@nextui-org/react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Link from 'next/link';

type DataItems = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
};

const ProductItems = ({ product }: { product: DataItems }) => {
  return (
    <>
      <Card isPressable isBlurred shadow="sm" className="py-4">
        <CardBody className="overflow-visible py-2">
          <Link href={`/edit/${product.id}`}>
            <Image
              alt={product.name}
              className="object-cover rounded-xl"
              src={product.image}
            />
          </Link>
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{product.name}</p>
          <small className="font-bold text-large">
            Quantity: {product.quantity}
          </small>
          <h4 className="font-bold text-large">Price: रु‎ {product.price}</h4>
        </CardHeader>
        <div className=" flex items-center justify-center gap-5 mt-4">
          <Link href={`/edit/${product.id}`}>
            <Button
              className="ms-3"
              color="success"
              startContent={<AiOutlineEdit />}
            >
              Edit Product
            </Button>
          </Link>
          <Link href="/delete">
            <Button color="danger" startContent={<AiOutlineDelete />}>
              Delete Product
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default ProductItems;
