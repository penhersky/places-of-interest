import { LoginOutlined } from "@ant-design/icons";
import { Divider, Drawer, Typography } from "antd";
import { useTranslation } from "next-i18next";
import React from "react";
import { useSelector } from "react-redux";

import { paths } from "../../models/constants/routes";
import { openAuthModel } from "../../store/action";
import { Link, LocaleSelect } from "../shared";
import UserMenuList from "./userMenuList";

interface IDrawerProps {
  visible: boolean;
  onClose: () => void;
}

const AppDrawer: React.FC<IDrawerProps> = ({ visible, onClose }) => {
  const { authUser } = useSelector((state: any) => state.environment);
  const { t } = useTranslation();

  const onClickAuth = () => {
    onClose();
    openAuthModel();
  };

  return (
    <Drawer
      placement="left"
      closable
      onClose={onClose}
      visible={visible}
      bodyStyle={{ padding: 0 }}
      footer={<LocaleSelect />}
    >
      {authUser?.id ? (
        <>
          <Link
            className="drawer-top"
            href={paths.user.profile.to}
            as={paths.user.profile.as(authUser.id)}
          >
            <img
              src={authUser.image}
              alt={authUser.name}
              className="drawer-top__image"
            />
            <div className="drawer-top__content">
              <Typography.Title level={4}>{authUser.name}</Typography.Title>
              <Typography.Text>{authUser.email}</Typography.Text>
            </div>
          </Link>
          <Divider style={{ margin: "2px 0" }} />
          <div className="drawer-center">
            <UserMenuList user={authUser} />
          </div>
        </>
      ) : (
        <div
          className="drawer-login"
          onClick={onClickAuth}
          role="button"
          onKeyDown={onClickAuth}
          tabIndex={0}
        >
          <div className="drawer-login__content">
            <LoginOutlined className="primary-color font-size-large" />
            <Typography.Link className="drawer-login__text font-size-medium">
              {t`auth:login`}
            </Typography.Link>
          </div>

          <Typography.Paragraph className="drawer-login__description">
            {t`header:loginDescription`}
          </Typography.Paragraph>
        </div>
      )}
    </Drawer>
  );
};

export default AppDrawer;
