import { TFunction } from "next-i18next";

import PublicProfile from "./PublicProfile/PublicProfile";

// eslint-disable-next-line import/prefer-default-export
export const getSettingsNavigationList = (t: TFunction) => [
  {
    label: t("settings:personal-info.name"),
    icon: "UserOutlined",
    Tab: PublicProfile,
    key: "personal-info",
  },
  {
    label: t("settings:loginAndSecurity.name"),
    icon: "SafetyOutlined",
    Tab: "LoginAndSecurity",
    key: "Login-security",
  },
  {
    label: t("settings:notification.name"),
    icon: "BellOutlined",
    Tab: "Notification",
    key: "notification",
  },
  {
    label: t("settings:privacy.name"),
    icon: "EyeOutlined",
    Tab: "PrivacySharing",
    key: "privacy-sharing",
  },
  {
    label: t("settings:globalPreferences.name"),
    icon: "SlidersOutlined",
    Tab: "GlobalPreferences",
    key: "global-preferences",
  },
];
