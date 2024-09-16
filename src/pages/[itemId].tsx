import { Button, CarouselItem } from "@/components";
import { DataContext } from "components/DataProvider";
import Loading from "components/Loading";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const ItemPage: NextPage = () => {
  const data = useContext(DataContext);
  const {
    query: { itemId },
  } = useRouter();

  if (!data) return <Loading />;

  const theItemData = data ? data.find?.((d) => d.id === itemId) : null;

  return (
    <div>
      <div className="flex pb-4">
        <Link href="/">Home</Link>&nbsp;/&nbsp;
        <p className="font-bold">{theItemData?.title || itemId}</p>
      </div>
      <div className="flex w-full justify-center">
        {theItemData ? (
          <CarouselItem data={theItemData} large />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-9xl text-black">404</h1>
            <h3 className="text-2xl">Not Found!</h3>
            <Button href="/">Back to home!</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemPage;
