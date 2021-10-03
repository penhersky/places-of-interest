import { Input, Select } from "antd";
import { useTranslation } from "next-i18next";
import React from "react";
import { v4 as uuid } from "uuid";

import { IPublicProfile } from "../../../models/pagesProps/Settings";
import { DatePicker } from "../../shared";
import FormControl, {
  IFailedProps,
} from "../../shared/FormControl/FormControl";
import fieldsList from "./fieldsList";

const PublicProfile: React.FC<IPublicProfile> = ({ user }) => {
  const { t } = useTranslation();
  // const loading = false;

  const onFinishHandler = (value: any) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };
  const onFinishFailedHandler = (error: IFailedProps) => {
    // eslint-disable-next-line no-console
    console.log(error);
  };

  return (
    <div>
      <FormControl
        onFinish={onFinishHandler}
        onFinishFailed={onFinishFailedHandler}
        initialValues={user}
        Fields={({ onChange, Wrap }) => (
          <>
            {fieldsList.map((field) => (
              <Wrap
                label={t(field.label)}
                name={field.name}
                rules={field.rules}
                hasFeedback
                key={uuid()}
              >
                <Input onChange={onChange} />
              </Wrap>
            ))}
            <Wrap label={t("settings:personal-info.birthday")} name="birthday">
              <DatePicker onChange={onChange} />
            </Wrap>
            <Wrap label={t("settings:personal-info.gender")} name="gender">
              <Select onChange={onChange} />
            </Wrap>
          </>
        )}
      />
    </div>
  );
};

export default PublicProfile;
