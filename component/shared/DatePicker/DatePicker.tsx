import { DatePicker } from "antd";
import moment, { Moment } from "moment";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React from "react";

import getLocale from "../../../utils/datePickerLocale";

interface IDatePickerProps {
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: Moment | null) => void;
  value?: string;
  role?: string;
  defaultValue?: string;
  // eslint-disable-next-line no-unused-vars
  disabledDate?: (current: Moment) => boolean;
}

const AppDatePicker: React.FC<IDatePickerProps> = ({
  onChange,
  value,
  role,
  defaultValue,
  disabledDate,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const disabledDateLocal = (current: Moment) => {
    const newDate = new Date();
    return (
      current &&
      current > moment(newDate.setFullYear(newDate.getFullYear() - 12))
    );
  };

  return (
    <DatePicker
      value={value ? moment(value) : undefined}
      style={{ width: "100%" }}
      role={role}
      onChange={onChange}
      format="DD-MM-YYYY"
      showToday={false}
      defaultValue={defaultValue ? moment(defaultValue) : undefined}
      disabledDate={disabledDate || disabledDateLocal}
      locale={getLocale(t, router.locale as string)}
    />
  );
};

export default AppDatePicker;
