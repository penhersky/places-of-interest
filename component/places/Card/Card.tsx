import { Image, Typography } from "antd";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import plastholder from "../../../assets/image-plastholder.svg";

interface IProductCard {
  name: string;
  image?: string;
  location: string;
}

const Card: React.FC<IProductCard> = ({ image, name, location }) => (
  <div className="place-card">
    <div className="place-card__imageContainer" key={uuidv4()}>
      <Image
        className="place-card__imageContainer__image"
        preview={false}
        src={image || plastholder.src}
        alt={name}
        fallback={plastholder.src}
        placeholder={<Image preview={false} src={plastholder.src} />}
      />
    </div>

    <div className="place-card__content">
      <Typography.Text strong className="place-card__content__title">
        {name}
      </Typography.Text>
      <Typography.Text type="secondary">{location}</Typography.Text>
    </div>
  </div>
);

export default Card;
