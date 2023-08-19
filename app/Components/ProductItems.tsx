'use client';
import React from 'react';
import { Card, CardHeader, CardBody, Image, Button } from '@nextui-org/react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Link from 'next/link';

interface DataItems {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const ProductItems = ({ data }: { data: DataItems }) => {
  return (
    <>
      <Card isBlurred shadow="sm" className="py-4">
        <CardBody className="overflow-visible py-2">
          <Image
            alt={data.name}
            className="object-cover rounded-xl"
            src={data.image}
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{data.name}</p>
          <small className="font-bold text-large">
            Quantity: {data.quantity}
          </small>
          <h4 className="font-bold text-large">Price: {data.price}</h4>
        </CardHeader>
        <div className=" flex items-center justify-evenly mt-4">
          <Link href="/edit">
            <Button color="success" startContent={<AiOutlineEdit />}>
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