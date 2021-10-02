import { ApolloError } from "@apollo/client";

export interface Locale {
  locale: string;
}

export type IServiceError = ApolloError | null | string;
