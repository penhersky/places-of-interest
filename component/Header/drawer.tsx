import { LoginOutlined } from "@ant-design/icons";
import { Divider, Drawer, Typography } from "antd";
import { useTranslation } from "next-i18next";
import React from "react";

import { openAuthModel } from "../../store/action";
import { LocaleSelect } from "../shared";

interface IDrawerProps {
  visible: boolean;
  onClose: () => void;
}

const AppDrawer: React.FC<IDrawerProps> = ({ visible, onClose }) => {
  const { t } = useTranslation();
  const isAuth = false;

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
      footer={
        <div>
          <LocaleSelect />
        </div>
      }
    >
      {isAuth ? (
        <>
          <div className="drawer-top">top</div>
          <Divider />
          <div className="drawer-center">center</div>
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
