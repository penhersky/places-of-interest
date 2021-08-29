import Link from "next/link";
import React from "react";

interface ILinkProps {
  children: string | React.ReactNode;
  className?: string;
  href: string;
  as?: string;
}

const MyLink: React.FC<ILinkProps> = ({ className, children, href, as }) => (
  <Link href={href} as={as}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={className}>{children}</a>
  </Link>
);

export default MyLink;
