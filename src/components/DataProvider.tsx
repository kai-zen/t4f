import { baseUrl, HOME_ITEMS } from "@/routes";
import { productDataType } from "@/types";
import { createContext, useState, useEffect, ReactNode, FC } from "react";

type DataContextType = productDataType[] | null;

export const DataContext = createContext<DataContextType>(null);

type DataProviderProps = {
  children: ReactNode;
};

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [homeItems, setHomeItems] = useState<DataContextType>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/${HOME_ITEMS}`);
        const data: productDataType[] = await res.json();
        console.log("fetched data:", data);
        setHomeItems(data);
      } catch (err) {
        console.error("The fetch request failed:", err);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <DataContext.Provider value={homeItems}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
