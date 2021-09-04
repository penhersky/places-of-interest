import clsx from "clsx";
import React from "react";

import { IPageWrapperProps } from "../../models";
import AuthModel from "../auth/model/AuthModel";
import Header from "../Header/Header";
import Seo from "./seo";

const Page: React.FC<IPageWrapperProps> = ({
  children,
  offContainer,
  classNames,
  hiddenHeader,
  seo,
}) => (
  <>
    <Seo
      description={seo.description}
      keywords={seo.keywords}
      title={seo.title}
    />
    <AuthModel />
    {hiddenHeader || <Header />}
    <div
      className={clsx(
        offContainer || "container",
        hiddenHeader || "header-margin",
        classNames
      )}
    >
      {children}
    </div>
  </>
);

export default Page;
