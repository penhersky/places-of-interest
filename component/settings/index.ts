import { TFunction } from "next-i18next";

// eslint-disable-next-line import/prefer-default-export
export const getSettingsNavigationList = (t: TFunction) => [
  {
    label: t("settings:publicProfile"),
    icon: "SmileOutlined",
    tab: "PublicProfile",
    key: "public-profile",
  },
  {
    label: t("settings:accountSettings"),
    icon: "UserOutlined",
    tab: "accountSettings",
    key: "account-settings",
  },
  {
    label: t("settings:notification"),
    icon: "BellOutlined",
    tab: "notification",
    key: "notification",
  },
  {
    label: t("settings:security"),
    icon: "SafetyOutlined",
    tab: "security",
    key: "security",
  },
];
