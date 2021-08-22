import clsx from "clsx";
import React from "react";

import { IPageWrapperProps } from "../../models";
import Seo from "./seo";

const Page: React.FC<IPageWrapperProps> = ({
  children,
  offContainer,
  classNames,
  seo,
}) => (
  <>
    <Seo
      description={seo.description}
      keywords={seo.keywords}
      title={seo.title}
    />
    <div className={clsx(offContainer || "container", classNames)}>
      {children}
    </div>
  </>
);

export default Page;
