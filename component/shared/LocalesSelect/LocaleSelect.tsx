import { GlobalOutlined } from "@ant-design/icons";
import { Button, List, Popover } from "antd";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import locales from "../../../models/constants/locales";

const LocaleSelect = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (status: boolean) => setVisible(status);

  const onChangeLanguage = (value: string) => {
    setVisible(false);
    router.replace(router.pathname, router.pathname, { locale: value });
  };

  return (
    <Popover
      content={
        <List
          dataSource={locales}
          renderItem={(item) => (
            <List key={uuidv4()}>
              <Button onClick={() => onChangeLanguage(item.value)} type="link">
                {item.label}
              </Button>
            </List>
          )}
        />
      }
      title={t("language")}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button type="text" icon={<GlobalOutlined />}>
        {locales.find((lang) => lang.value === i18n.language)?.label}
      </Button>
    </Popover>
  );
};

export default LocaleSelect;
