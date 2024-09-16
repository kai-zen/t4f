import Link from "next/link";
import { FC, ReactNode } from "react";

interface propTypes {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const className =
  "inline-block rounded-full bg-red-500 px-8 pb-2 pt-2.5 text-xl font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong";

const Button: FC<propTypes> = ({ children, onClick, href }) => {
  return href ? (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
