import { Input } from "antd";
import React, { useState } from "react";

import FormControl, {
  IFailedProps,
} from "../../shared/FormControl/FormControl";

const PublicProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("");

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
        loading
        Fields={({ onChange, Wrap }) => (
          <>
            <Wrap
              label="Username"
              name="username"
              validateStatus="validating"
              hasFeedback
            >
              <Input onChange={onChange} />
            </Wrap>
          </>
        )}
      />
    </div>
  );
};

export default PublicProfile;
