import { FC, ReactNode } from "react";

interface propTypes {
  children: ReactNode;
}

const Layout: FC<propTypes> = ({ children }) => {
  return <main className="container block mx-auto py-8">{children}</main>;
};

export default Layout;
