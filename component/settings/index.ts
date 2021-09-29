import { TFunction } from "next-i18next";

import PublicProfile from "./PublicProfile/PublicProfile";

// eslint-disable-next-line import/prefer-default-export
export const getSettingsNavigationList = (t: TFunction) => [
  {
    label: t("settings:personal-info"),
    icon: "UserOutlined",
    Tab: PublicProfile,
    key: "personal-info",
  },
  {
    label: t("settings:loginAndSecurity"),
    icon: "SafetyOutlined",
    Tab: "LoginAndSecurity",
    key: "Login-security",
  },
  {
    label: t("settings:notification"),
    icon: "BellOutlined",
    Tab: "Notification",
    key: "notification",
  },
  {
    label: t("settings:privacy"),
    icon: "EyeOutlined",
    Tab: "PrivacySharing",
    key: "privacy-sharing",
  },
  {
    label: t("settings:globalPreferences"),
    icon: "SlidersOutlined",
    Tab: "GlobalPreferences",
    key: "global-preferences",
  },
];
