import React from "react";

interface IIconsProps {
  type: string;
  className?: string;
}

const Icon: React.FC<IIconsProps> = ({ type, className }) => {
  // eslint-disable-next-line global-require
  const icons = require(`@ant-design/icons`);
  const Component = icons[type];
  return <Component className={className} />;
};

export default Icon;
