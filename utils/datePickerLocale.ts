import { PickerLocale } from "antd/lib/date-picker/generatePicker";
import US from "antd/lib/date-picker/locale/en_US";
import { TFunction } from "next-i18next";

const getLocale = (t: TFunction, locale: string): PickerLocale => {
  const tr = (key: string) => t(`date:datePicker.${key}`);

  if (locale === "en-US") return US;
  return {
    lang: {
      locale,
      monthBeforeYear: true,
      today: tr("today"),
      now: tr("now"),
      backToToday: tr("backToToday"),
      ok: tr("ok"),
      clear: tr("clear"),
      month: tr("month"),
      year: tr("year"),
      timeSelect: tr("timeSelect"),
      dateSelect: tr("dateSelect"),
      monthSelect: tr("monthSelect"),
      yearSelect: tr("yearSelect"),
      decadeSelect: tr("decadeSelect"),
      previousMonth: tr("previousMonth"),
      nextMonth: tr("nextMonth"),
      previousYear: tr("previousYear"),
      nextYear: tr("nextYear"),
      previousDecade: tr("previousDecade"),
      nextDecade: tr("nextDecade"),
      previousCentury: tr("previousCentury"),
      nextCentury: tr("nextCentury"),
      yearFormat: "YYYY",
      dateFormat: "D M YYYY",
      dayFormat: "D",
      dateTimeFormat: "D M YYYY HH:mm:ss",
      shortWeekDays: t("date:datePicker.days").split(","),
      shortMonths: t("date:datePicker.months").split(","),

      // placeholders
      placeholder: tr("placeholder"),
      yearPlaceholder: "",
      quarterPlaceholder: "",
      monthPlaceholder: "",
      weekPlaceholder: "",
      rangeYearPlaceholder: ["", ""],
      rangeMonthPlaceholder: ["", ""],
      rangeWeekPlaceholder: ["", ""],
      rangePlaceholder: ["", ""],
    },
    timePickerLocale: {
      placeholder: tr("timePlaceholder"),
    },
  };
};

export default getLocale;
