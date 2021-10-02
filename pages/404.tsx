import { Button, Result } from "antd";
import React from "react";

import { PageWrapper } from "../component";
import { Link } from "../component/shared";

const Page404 = () => (
  <PageWrapper pageKey="notFound" hiddenHeader>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </PageWrapper>
);

export default Page404;
