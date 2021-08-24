import { Button, Typography } from "antd";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { PageWrapper } from "../component";
import { getHomeProps } from "../services";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper seo={{ description: "", keywords: [], title: "title" }}>
      <div style={{ height: 1000 }}>
        <Typography.Title level={1}>{t("hello")}</Typography.Title>
        <Button type="primary">{t("click-me")}</Button>
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps = getHomeProps;

export default Home;
