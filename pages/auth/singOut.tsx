import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";

import { logOut } from "../../store/action";

const singOut = () => {
  const { push } = useRouter();
  useLayoutEffect(() => {
    logOut();
    localStorage.clear();
    push("/");
  });
  return <div>Pending...</div>;
};

export default singOut;
