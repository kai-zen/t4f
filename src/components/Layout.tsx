import { FC, ReactNode } from "react";

interface propTypes {
  children: ReactNode;
}

const Layout: FC<propTypes> = ({ children }) => {
  return (
    <main className="container block mx-auto py-8">
      <h1 className="text-xl font-bold mb-4">
        Have fun with cats in time 4 fun!
      </h1>
      {children}
    </main>
  );
};

export default Layout;
