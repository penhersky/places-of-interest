export const headerLinks = ["/", "/for-you", "/around", "/rating"];

export const paths = {
  auth: {
    login: "/auth/login",
    singOut: "/auth/singOut",
  },
  user: {
    profile: {
      to: "/user/[id]",
      as: (id: string) => `/user/${id}`,
    },
    places: "/places",
    settings: "/settings",
  },
};
