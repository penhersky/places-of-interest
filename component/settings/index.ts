import { TFunction } from "next-i18next";

import PublicProfile from "./PublicProfile/PublicProfile";

// eslint-disable-next-line import/prefer-default-export
export const getSettingsNavigationList = (t: TFunction) => [
  {
    label: t("settings:publicProfile"),
    icon: "SmileOutlined",
    Tab: PublicProfile,
    key: "public-profile",
  },
  {
    label: t("settings:accountSettings"),
    icon: "UserOutlined",
    Tab: "accountSettings",
    key: "account-settings",
  },
  {
    label: t("settings:notification"),
    icon: "BellOutlined",
    Tab: "notification",
    key: "notification",
  },
  {
    label: t("settings:security"),
    icon: "SafetyOutlined",
    Tab: "security",
    key: "security",
  },
];
