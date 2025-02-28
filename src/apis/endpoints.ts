const V1 = `/api/v1`;
const USERS = `${V1}/users`;

export const endpoints = {
    LOGIN: `${USERS}/login/`,
    LOGIN_WITH_GOOGLE: `${USERS}/accounts/google/`,
    REFRESH_TOKEN: (id: number) => `${USERS}/${id}/refresh-token`,
    USER: (id: number) => `${USERS}/${id}/`,
}
