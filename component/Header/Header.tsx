import {
  AimOutlined,
  ArrowLeftOutlined,
  BarChartOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Row } from "antd";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { useWindowScroll } from "react-use";
import { v4 as uuidv4 } from "uuid";

import logo from "../../assets/logo.svg";
import { headerLinks, paths } from "../../models/constants/routes";
import { LocaleSelect } from "../shared";
import Drawer from "./drawer";
import HeaderItem from "./headerItem";

const scrolledHeight = 10;

const Header = () => {
  const router = useRouter();
  const scroll = useWindowScroll();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const icons = [HomeOutlined, StarOutlined, AimOutlined, BarChartOutlined];

  const isManePages = headerLinks.includes(router.asPath);

  const onBackHandler = () => router.back();

  const onOpenDrawerHandler = () => setVisible(true);
  const onCloseDrawerHandler = () => setVisible(false);

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
        <div className="header__left">
          <Image src={logo} />
        </div>
        <Row className="header__center">
          {headerLinks.map((item, i) => (
            <HeaderItem
              key={uuidv4()}
              link={item}
              icon={({ className }) => {
                const Icon = icons[i];
                return <Icon className={className} />;
              }}
            >
              {t(`header:menu.${item}`)}
            </HeaderItem>
          ))}
        </Row>
        <div className="header__right">
          <LocaleSelect />
          <Link href={paths.auth.login}>{t`auth:login`}</Link>
        </div>
      </div>
      <Drawer visible={visible} onClose={onCloseDrawerHandler} />
    </>
  );
};

export default Header;
