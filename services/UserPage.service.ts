import axios from "axios";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getUser } from "../models/constants/requestsUrl";

const getProps: GetServerSideProps = async ({ locale, params }) => {
  try {
    const user = await axios.get(getUser(params?.id as string));

    return {
      props: {
        ...(await serverSideTranslations(locale as string)),
        user: user.data,
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale as string)),
      },
    };
  }
};

export default getProps;
