import { Card, Skeleton } from '@nextui-org/react';
const Test = () => {
  return (
    <>
      <Card className="w-[300px] h-[300px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className=" h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="flex  gap-5 items-center">
            <Skeleton className="w-2/5 rounded-lg">
              <div className=" h-12 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-12 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Test;
