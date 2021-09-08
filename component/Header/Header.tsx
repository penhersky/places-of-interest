import {
  AimOutlined,
  ArrowLeftOutlined,
  BarChartOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Popover, Row, Typography } from "antd";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useWindowScroll } from "react-use";
import { v4 as uuidv4 } from "uuid";

import logo from "../../assets/logo.svg";
import { headerLinks, paths } from "../../models/constants/routes";
import { openAuthModel } from "../../store/action";
import { Icon, Link, LocaleSelect } from "../shared";
import Drawer from "./drawer";
import HeaderItem from "./headerItem";
import UserMenuList from "./userMenuList";

const scrolledHeight = 10;

const Header = () => {
  const router = useRouter();
  const { authUser } = useSelector((state: any) => state.environment);
  const scroll = useWindowScroll();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const icons = [HomeOutlined, StarOutlined, AimOutlined, BarChartOutlined];

  const isManePages = headerLinks.includes(router.asPath);

  const onBackHandler = () => router.back();

  const onOpenDrawerHandler = () => setVisible(true);
  const onCloseDrawerHandler = () => setVisible(false);

  const onOpenModalHandler = () => openAuthModel();

  return (
    <>
      <div
        className={clsx(
          "mob-header small-padding",
          +scroll.y > scrolledHeight && "mob-header__scroll"
        )}
      >
        {isManePages ? (
          <MenuOutlined
            className="primary-color margin-small font-size-medium"
            onClick={onOpenDrawerHandler}
          />
        ) : (
          <ArrowLeftOutlined
            className="primary-color margin-small font-size-medium"
            onClick={onBackHandler}
          />
        )}
        <SearchOutlined className="primary-color margin-small font-size-medium" />
      </div>
      <div
        className={clsx(
          "header",
          +scroll.y > scrolledHeight && "header__scroll"
        )}
      >
        <div className="header__content container">
          <div className="header__left">
            <Image src={logo} />
          </div>

          <Row className="header__center">
            {headerLinks.map((item, i) => (
              <HeaderItem
                key={uuidv4()}
                link={item}
                icon={({ className }) => {
                  const IconL = icons[i];
                  return <IconL className={className} />;
                }}
              >
                {t(`header:menu.${item}`)}
              </HeaderItem>
            ))}
          </Row>

          <div className="header__right">
            <LocaleSelect />
            {authUser && authUser.id ? (
              <>
                <Link
                  href={paths.user.profile.to}
                  as={paths.user.profile.as(authUser.id)}
                >
                  <Avatar src={authUser.image}>
                    {authUser.image || authUser.name[0]}
                  </Avatar>
                </Link>
                <Popover
                  trigger="focus"
                  placement="bottomRight"
                  style={{ padding: 0 }}
                  content={<UserMenuList user={authUser} />}
                >
                  <Button type="link">
                    <Icon
                      type="DownOutlined"
                      className="secondary-color font-size-medium margin-small cursor-pointer"
                    />
                  </Button>
                </Popover>
              </>
            ) : (
              <Typography.Link
                onClick={onOpenModalHandler}
              >{t`auth:login`}</Typography.Link>
            )}
          </div>
        </div>
      </div>
      <Drawer visible={visible} onClose={onCloseDrawerHandler} />
    </>
  );
};

export default Header;
