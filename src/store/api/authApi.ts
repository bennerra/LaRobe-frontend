import {BaseQueryArg, createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Storage} from "@/constants/storage";
import {config} from "@/constants/envs";

interface SignINRequest {
  username: string;
  password: string;
}

interface SignINResponse {
  token: string;
}

interface SignUPBase {
  username: string;
  email: string;
  nickname: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  phone: string;
  sex: string;
  date_of_birth: string;
}

interface SignUPRequest extends SignUPBase {
  password: string;
}

interface SignUPResponse extends SignUPBase {
  token: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.apiUrl}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(Storage.token)
      if (token) {
        headers.set("Authorization", `Token ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    signup: builder.mutation<SignUPResponse, SignUPRequest>({
      query: (credentials) => ({
        url: "signup/",
        method: "POST",
        body: credentials
      }),
      invalidatesTags: ["Auth"]
    }),
    signin: builder.mutation<SignINResponse, SignINRequest>({
      query: (credentials) => ({
        url: "signin/",
        method: "POST",
        body: credentials
      })
    }),
    profile: builder.mutation({
      query: () => ({
        url: "profile",
        method: "GET"
      })
    })
  })
})

export const {
  useSignupMutation,
  useSigninMutation,
  useProfileMutation
} = authApi;