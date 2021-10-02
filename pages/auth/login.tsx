import React from "react";

import { PageWrapper } from "../../component";
import { getLocale } from "../../services/initialProps";

const Login = () => (
  <PageWrapper pageKey="login">
    <h1>Login</h1>
  </PageWrapper>
);

export const getServerSideProps = getLocale;

export default Login;
