import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IHeaderItemProps {
  link: string;
  children: string;
}

const HeaderItem: React.FC<IHeaderItemProps> = ({ link, children }) => {
  const router = useRouter();

  const isActive = React.useMemo(() => router.asPath === link, []);

  return (
    <Link href={link}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={clsx(
          "header__menu-item",
          isActive && "header__menu-item-active"
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default HeaderItem;
