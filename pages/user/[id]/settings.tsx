import { SettingFilled } from "@ant-design/icons";
import { Row, Tabs, Typography } from "antd";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React from "react";
import { useSelector } from "react-redux";

import { PageWrapper } from "../../../component";
import { getSettingsNavigationList } from "../../../component/settings";
import { Icon } from "../../../component/shared";
import { IStore } from "../../../models";
import { paths } from "../../../models/constants/routes";
import { ISettingsProps } from "../../../models/pagesProps/Settings";
import getSettingsPageProps from "../../../services/initialProps/Settings.service";

const { TabPane } = Tabs;

const Settings: NextPage<ISettingsProps> = ({ error, data }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { authUser } = useSelector((store: IStore) => store.environment);

  const onChangeHandler = (key: string) => {
    router.push(
      `${paths.user.profile.to}${paths.user.settings}?tab=${key}`,
      `${paths.user.profile.as(authUser?.id as string)}${
        paths.user.settings
      }?tab=${key}`
    );
  };

  if (error || !data) return <h1>Error</h1>;

  return (
    <PageWrapper
      seo={{
        description: "",
        keywords: [],
        title: [t("header:settings"), authUser?.name as string],
      }}
      classNames="settings"
    >
      <Row className="card settings__title" justify="center" align="middle">
        <SettingFilled className="font-size-large margin-small" />
        <Typography.Title level={2}>{t("header:settings")}</Typography.Title>
      </Row>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        size="large"
        centered
        activeKey={router.query.tab as string}
        onChange={onChangeHandler}
        className="settings__tabs"
      >
        {getSettingsNavigationList(t).map((item) => (
          <TabPane
            tab={
              <span className="padding-small">
                <Icon type={item.icon} className="font-size-medium" />
                <Typography.Text>{item.label}</Typography.Text>
              </span>
            }
            key={item.key}
            className="card settings__tabs__item"
          >
            <item.Tab user={data.publicProfile.user} />
          </TabPane>
        ))}
      </Tabs>
    </PageWrapper>
  );
};

export const getServerSideProps = getSettingsPageProps;

export default Settings;
