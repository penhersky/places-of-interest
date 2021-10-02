import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ISettingsProps } from "../../models/pagesProps/Settings";
import client from "../client";
import { query } from "../schemas";

const getProps: GetServerSideProps = async ({
  locale,
  params,
}): Promise<GetServerSidePropsResult<ISettingsProps>> => {
  try {
    const { data, error = null } = await client.query({
      query: query.user.USER,
      variables: {
        id: params?.id as string,
      },
    });

    return {
      props: {
        ...(await serverSideTranslations(locale as string)),
        data: {
          personalInfo: {
            user: data.User || null,
          },
          loginAndSecurity: {},
          notifications: {},
          privacyAndSharing: {},
          globalPreferences: {},
        },
        error,
      },
    };
  } catch (error: any) {
    return {
      props: {
        ...(await serverSideTranslations(locale as string)),
        error: error.message,
      },
    };
  }
};

export default getProps;
