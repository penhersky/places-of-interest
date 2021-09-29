import { Input } from "antd";
import React, { useState } from "react";

import { IPublicProfile } from "../../../models/pagesProps/Settings";
import FormControl, {
  IFailedProps,
} from "../../shared/FormControl/FormControl";

const PublicProfile: React.FC<IPublicProfile> = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState(user.name);

  const onFinishHandler = (value: any) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };
  const onFinishFailedHandler = (error: IFailedProps) => {
    // eslint-disable-next-line no-console
    setName(user.name);
    console.log(error);
  };

  return (
    <div>
      <FormControl
        onFinish={onFinishHandler}
        onFinishFailed={onFinishFailedHandler}
        initialValues={{ username: name }}
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
