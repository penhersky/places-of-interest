import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Space } from "antd";
import { InternalNamePath } from "antd/lib/form/interface";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

interface IFromControlProps {
  Fields: React.FC<{ onChange: () => void; Wrap: typeof Form.Item }>;
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: any) => void;
  // eslint-disable-next-line no-unused-vars
  onFinishFailed: (error: IFailedProps) => void;
  onReset?: () => void;
  initialValues?: any;
  loading?: boolean;
  showCancel?: boolean;
  submitText?: string;
}

export interface IFailedProps {
  errorFields: { name: InternalNamePath; errors: string[] }[];
  values: any;
}

const FormControl: React.FC<IFromControlProps> = ({
  Fields,
  onFinish,
  onFinishFailed,
  onReset,
  showCancel = true,
  submitText,
  loading,
  initialValues,
}) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [changed, setChanged] = useState(false);

  const onChangeHandler = () => setChanged(true);

  const onFinishFailedHandler = ({ errorFields, values }: IFailedProps) => {
    onFinishFailed({ errorFields, values });
  };

  const onResetHandler = () => {
    if (onReset) onReset();
    setChanged(false);
    form.setFieldsValue(initialValues);
  };

  React.useEffect(() => {
    form.setFieldsValue(initialValues);
  }, []);

  return (
    <Form
      layout="vertical"
      wrapperCol={{ span: 10 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailedHandler}
      autoComplete="off"
      form={form}
      defaultValue={initialValues}
    >
      <Fields onChange={onChangeHandler} Wrap={Form.Item} />

      <Form.Item style={{ visibility: changed ? "visible" : "hidden" }}>
        <Space size={[10, 0]}>
          <Button type="primary" htmlType="submit" disabled={loading}>
            {submitText || t("form:save")}
          </Button>
          {showCancel && (
            <Button type="default" onClick={onResetHandler} disabled={loading}>
              {t("form:cancel")}
            </Button>
          )}
          {loading && <LoadingOutlined className="font-size-medium" />}
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormControl;
