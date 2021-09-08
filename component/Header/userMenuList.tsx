import { Divider, List, Row, Typography } from "antd";
import { useTranslation } from "next-i18next";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import { IAuthUser } from "../../models/entity";
import { Icon, Link } from "../shared";
import { getEditionList, getUserNavigationList } from "./list";

interface IUserListProps {
  user: IAuthUser;
}

const UserMenuList: React.FC<IUserListProps> = ({ user }) => {
  const { t } = useTranslation();
  return (
    <div className="header-user-list">
      <List
        dataSource={getUserNavigationList(user.id, t)}
        itemLayout="horizontal"
        renderItem={(item) => (
          <Link
            className="header-user-list__list-item"
            key={uuidv4()}
            href={item.to}
            as={item.as}
          >
            <Row justify="start">
              <Icon
                className="secondary-color font-size-medium header-user-list__list-icon"
                type={item.icon}
              />
              <Typography.Text>{item.label}</Typography.Text>
            </Row>
          </Link>
        )}
      />
      <Divider />
      <List
        dataSource={getEditionList(t)}
        itemLayout="horizontal"
        renderItem={(item) => (
          <Link
            className="header-user-list__list-item"
            key={uuidv4()}
            href={item.to}
          >
            <Row justify="start">
              <Icon
                className="secondary-color font-size-medium header-user-list__list-icon"
                type={item.icon}
              />
              <Typography.Text>{item.label}</Typography.Text>
            </Row>
          </Link>
        )}
      />
    </div>
  );
};

export default UserMenuList;
