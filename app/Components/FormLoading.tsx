import { Card, Skeleton } from '@nextui-org/react';
const FormLoading = () => {
  return (
    <>
      <div className="">
        <Card
          className="max-w-lg max-h-lg  space-y-5 p-7  mx-auto mt-6"
          radius="lg"
        >
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className=" h-10 w- rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="rounded-lg">
              <div className=" h-10 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className=" h-10 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className=" h-10 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="">
              <Skeleton className=" rounded-lg">
                <div className=" h-12  rounded-lg bg-default-300"></div>
              </Skeleton>
              {/* <Skeleton className="w-2/5 rounded-lg">
              <div className="h-12 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton> */}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default FormLoading;
