import { api } from '@/apis/api.ts';
import { endpoints } from '@/apis/endpoints.ts';

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: endpoints.LOGIN,
        method: 'POST',
        body: { email, password },
      }),
    }),
    googleLogin: builder.mutation({
      query: ({ accessToken }) => ({
        url: endpoints.LOGIN_WITH_GOOGLE,
        method: 'POST',
        body: { access_token: accessToken },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGoogleLoginMutation,
} = authApi;
