import React from 'react';

type Params = {
  params: {
    id: string;
  };
};
const EditProducts = async ({ params: { id } }: Params) => {
  console.log(id);
  return <div className="container mx-auto">products: {id}</div>;
};

export default EditProducts;
