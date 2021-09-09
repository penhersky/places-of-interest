import { Avatar } from "antd";
import React from "react";

import { generateHslColor } from "../../../models/lib/colorGenerators";

interface IAvatarProps {
  name: string;
  image?: string;
  className?: string;
  size?: number;
}

const MyAvatar: React.FC<IAvatarProps> = ({ image, name, size, className }) => {
  const firstLetter = name[0];
  const secondLetter = name.split(" ").length > 1 ? name.split(" ")[1][0] : "";
  return (
    <Avatar
      size={size}
      src={image}
      alt={name}
      className={className}
      style={{ backgroundColor: generateHslColor(name, 100, 75) }}
    >
      {(firstLetter + secondLetter).toUpperCase()}
    </Avatar>
  );
};

export default MyAvatar;
