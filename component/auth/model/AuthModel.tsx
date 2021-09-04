import {
  FacebookOutlined,
  GoogleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Divider, Modal } from "antd";
import { useTranslation } from "next-i18next";
import React from "react";
import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from "react-facebook-login";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { useSelector } from "react-redux";

import { closeAuthModel, setAuthUser } from "../../../store/action";

const googleAuthId = process.env.GOOGLE_LOGIN_ID as string;
const facebookId = process.env.FACEBOOK_LOGIN_ID as string;

const AuthModel = () => {
  const { t } = useTranslation();
  const { openAuthModal } = useSelector((state: any) => state.environment);

  const googleLoginSuccessHandler = (response: GoogleLoginResponse) => {
    const { name, email, googleId, imageUrl } = response.profileObj;
    setAuthUser({
      id: googleId,
      name,
      email,
      image: imageUrl,
    });
    closeAuthModel();
  };

  const facebookLoginSuccessHandler = (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    // eslint-disable-next-line no-console
    console.log(response);
    closeAuthModel();
  };

  return (
    <Modal
      visible={openAuthModal}
      onCancel={closeAuthModel}
      footer={false}
      title={t("auth:enter")}
    >
      <Button
        block
        className="socialButton"
        type="primary"
        icon={<MailOutlined className="font-size-medium margin-small" />}
      >
        {t("auth:withEmail")}
      </Button>
      <Divider plain>{t("common:or")}</Divider>
      <GoogleLogin
        clientId={googleAuthId}
        onSuccess={googleLoginSuccessHandler as any}
        cookiePolicy="single_host_origin"
        className="socialButton"
        icon={false}
      >
        <GoogleOutlined className="font-size-medium secondary-color margin-small" />
        <span>{t("auth:withGoogle")}</span>
      </GoogleLogin>
      <FacebookLogin
        appId={facebookId}
        callback={facebookLoginSuccessHandler}
        cssClass="socialButton socialButton__facebook"
        buttonStyle={{ backgroundColor: "#3B5998" }}
        textButton={t("auth:withFacebook")}
        icon={
          <FacebookOutlined className="font-size-medium secondary-color margin-small background-color socialButton__facebook-icon" />
        }
      />
    </Modal>
  );
};

export default AuthModel;
