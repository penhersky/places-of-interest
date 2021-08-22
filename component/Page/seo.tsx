import Head from "next/head";
import React from "react";

import { ISeoProps } from "../../models";

const SEO: React.FC<ISeoProps> = ({ description, keywords, title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta name="og:description" content={description} />
    <meta name="keywords" content={keywords.join(", ")} />
  </Head>
);

export default SEO;
