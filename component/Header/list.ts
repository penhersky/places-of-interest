import { TFunction } from "next-i18next";

import { paths } from "../../models/constants/routes";

const { profile } = paths.user;

export const getUserNavigationList = (userId: string, t: TFunction) => [
  {
    label: t("header:profile"),
    icon: "UserOutlined",
    to: profile.to,
    as: profile.as(userId),
  },
  {
    label: t("header:places"),
    icon: "AimOutlined",
    to: profile.to + paths.user.places,
    as: profile.as(userId) + paths.user.places,
  },
  {
    label: t("header:settings"),
    icon: "SettingOutlined",
    to: profile.to + paths.user.settings,
    as: profile.as(userId) + paths.user.settings,
  },
  {
    label: t("auth:singOut"),
    icon: "LogoutOutlined",
    to: paths.auth.singOut,
  },
];

export const getEditionList = (t: TFunction) => [
  { label: t("header:contactAs"), icon: "PhoneOutlined", to: "contact-as" },
  { label: "FAQ", icon: "QuestionOutlined", to: "faq" },
];
