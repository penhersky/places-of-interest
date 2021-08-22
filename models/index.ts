import React from "react";

export interface ISeoProps {
  description: string;
  keywords: string[];
  title: string;
}

export interface IPageWrapperProps {
  children: React.ReactNode;
  offContainer?: boolean;
  classNames?: string;
  seo: ISeoProps;
}
