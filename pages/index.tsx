import { Button, Typography } from "antd";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { PageWrapper } from "../component";
import { PlaceCard } from "../component/places";
import { getHomeProps } from "../services";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper seo={{ description: "", keywords: [], title: "title" }}>
      <div style={{ height: 2000 }}>
        <Typography.Title level={1}>{t("hello")}</Typography.Title>
        <Button type="primary">{t("click-me")}</Button>
        <PlaceCard
          image="https://upload.wikimedia.org/wikipedia/commons/6/67/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D0%BE%D0%BF%D0%B5%D1%80%D0%B8_%D1%82%D0%B0_%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D1%83_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%97_%D0%9A%D1%80%D1%83%D1%88%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D1%97_13.jpg"
          name="Львівський Національний Аграрний Університет"
          location="ЛНАУ, Volodymyra Velykoho Street, Dubliany, Lviv Oblast"
        />
        <PlaceCard
          image="https://cdn.pixabay.com/photo/2021/07/03/20/58/church-6384849_960_720.jpg"
          name="Львовский оперный театр"
          location="Оперний театр, Lviv, Lviv Oblast"
        />
        <PlaceCard name="TEST" location="Оперний театр, Lviv, Lviv Oblast" />
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps = getHomeProps;

export default Home;
