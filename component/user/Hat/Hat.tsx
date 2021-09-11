import { SettingOutlined } from "@ant-design/icons";
import { Button, Row, Typography } from "antd";
import React from "react";

import altImage from "../../../assets/default-user-back.jpg";
import { IUser } from "../../../models/entity/user";
import { Avatar } from "../../shared";

interface IUserHat {
  user: IUser;
}

const Hat: React.FC<IUserHat> = ({
  user: { backgroundImage, name, image },
}) => (
  <div className="user-hat">
    <div className="user-hat__bar">
      <Button type="default" shape="circle" icon={<SettingOutlined />} />
    </div>

    <div
      className="user-hat__image"
      style={{ backgroundImage: `url("${backgroundImage ?? altImage.src}")` }}
    />
    <Row className="user-hat__btm">
      <Avatar name={name} image={image} className="user-hat__btm__avatar" />
      <Row align="bottom" className="user-hat__btm__content">
        <Typography.Title level={1} style={{ margin: 0 }}>
          {name}
        </Typography.Title>
      </Row>
    </Row>
  </div>
);

export default Hat;
