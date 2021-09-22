import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import client from "../client";
import { query } from "../schemas";

const getProps: GetServerSideProps = async ({ locale, params }) => {
  try {
    const { data } = await client.query({
      query: query.user.USER,
      variables: {
        id: params?.id as string,
      },
    });

    return {
      props: {
        ...(await serverSideTranslations(locale as string)),
        user: data.User,
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
