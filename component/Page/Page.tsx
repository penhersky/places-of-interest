import clsx from "clsx";
import { useTranslation } from "next-i18next";
import React from "react";

import AuthModel from "../auth/model/AuthModel";
import Header from "../Header/Header";
import Seo from "./seo";

export interface IPageWrapperProps {
  children: React.ReactNode;
  pageKey: string;
  offContainer?: boolean;
  classNames?: string;
  hiddenHeader?: boolean;
  additionalSeo?: {
    keys?: any;
    description?: any;
    title?: any;
  };
}

const Page: React.FC<IPageWrapperProps> = ({
  children,
  offContainer,
  classNames,
  hiddenHeader,
  pageKey,
  additionalSeo,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        description={t(
          `seo:${pageKey}.description`,
          additionalSeo?.description
        )}
        keywords={t(`seo:${pageKey}.keywords`, additionalSeo?.keys).split(",")}
        title={t(`seo:${pageKey}.title`, additionalSeo?.title)}
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
};

export default Page;
