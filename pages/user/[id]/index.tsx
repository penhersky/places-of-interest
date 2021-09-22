import { NextPage } from "next";
import React, { useState } from "react";

import { PageWrapper } from "../../../component";
import { UserHat } from "../../../component/user";
import { IUser } from "../../../models/entity/user";
import { getUserPageProps } from "../../../services/initialProps";

interface IUserPageProps {
  user?: IUser;
}

const User: NextPage<IUserPageProps> = ({ user: propUser }) => {
  const [user] = useState(propUser as IUser);
  if (!user) return <div />;
  return (
    <PageWrapper seo={{ description: "", keywords: [], title: `${user.name}` }}>
      <UserHat user={user} />
      {user.name}
    </PageWrapper>
  );
};

export const getServerSideProps = getUserPageProps;

export default User;
