import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { AiOutlineEdit } from 'react-icons/ai';

const CreateBtn = () => {
  return (
    <>
      <div>
        <Link href="/create">
          <Button startContent={<AiOutlineEdit />}>Create Product</Button>
        </Link>
      </div>
    </>
  );
};

export default CreateBtn;
