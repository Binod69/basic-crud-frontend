import Link from 'next/link';
import { Button, Spacer } from '@nextui-org/react';
import { AiOutlineFolderAdd } from 'react-icons/ai';

const CreateBtn = () => {
  return (
    <>
      <Spacer y={5} />
      <div>
        <Link href="/create">
          <Button startContent={<AiOutlineFolderAdd />}>Create Product</Button>
        </Link>
      </div>
    </>
  );
};

export default CreateBtn;
