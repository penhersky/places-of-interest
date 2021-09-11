const { API_URL } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const getUser = (id: string) => `${API_URL}/users/${id}`;
