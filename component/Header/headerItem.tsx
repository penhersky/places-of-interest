import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IHeaderItemProps {
  link: string;
  children: string;
  // eslint-disable-next-line no-unused-vars
  icon: (props: { className: string }) => JSX.Element;
}

const HeaderItem: React.FC<IHeaderItemProps> = ({
  link,
  children,
  icon: Icon,
}) => {
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
        <Icon className="header__menu-item-icon" />
        <span className="header__menu-item-text"> {children}</span>
      </a>
    </Link>
  );
};

export default HeaderItem;
