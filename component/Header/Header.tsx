import {
  AimOutlined,
  BarChartOutlined,
  HomeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import logo from "../../assets/logo.svg";
import { headerLinks, paths } from "../../models/constants/routes";
import { LocaleSelect } from "../shared";
import HeaderItem from "./headerItem";

const Header = () => {
  const { t } = useTranslation();

  const icons = [HomeOutlined, StarOutlined, AimOutlined, BarChartOutlined];

  return (
    <div className="header">
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
    </div>
  );
};

export default Header;
