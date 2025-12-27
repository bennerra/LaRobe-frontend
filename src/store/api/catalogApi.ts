import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Storage } from "@/constants/storage";
import { config } from "@/constants/envs";

type GetProductsRequest = {
  stock?: boolean;
  no_stock?: boolean;
  price__gte?: number;
  price__lte?: number;
  brands?: string[];
  page: number;
  limit: number;
};

type GetProductsResponse = {
  count: number;
  next: null;
  previous: null;
  results: ProductItemResponse[];
};

type ProductItemResponse = {
  image: string;
  price: string;
  rating: {
    count: number;
    rating: number;
  };
  slug: string;
  stock: boolean;
  title: string;
};

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.apiUrl}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(Storage.token);
      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Catalog"],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsRequest>({
      query: (params) => {
        return {
          url: "products/",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = catalogApi;
