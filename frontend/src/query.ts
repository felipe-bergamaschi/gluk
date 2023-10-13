//@ts-nocheck
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import { request } from './api/axios';
import type { ErrorType } from './api/axios';
export type UsersControllerGetResponseItem = {
  name: string;
  id: string;
};

export type UsersControllerGetResponse = UsersControllerGetResponseItem[];

export type ProductsControllerGetResponseItemImagesItem = {
  id: string;
  url: string;
};

export type ProductsControllerGetResponseItem = {
  id: string;
  name: string;
  price: number;
  images: ProductsControllerGetResponseItemImagesItem[];
};

export type ProductsControllerGetResponse = ProductsControllerGetResponseItem[];

export interface HealthcheckControllerGetResponse {
  status: string;
  version: string;
  uptime: number;
}

export type ErrorResponseErrorAnyOf = {
  clientVersion?: null;
  [key: string]: any;
 };

export type ErrorResponseError = ErrorResponseErrorAnyOf | string;

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error?: ErrorResponseError;
  [key: string]: any;
 }




export const products = (
    
 signal?: AbortSignal
) => {
      
      
      return request<ProductsControllerGetResponse>(
      {url: `/products`, method: 'get', signal
    },
      );
    }
  

export const getProductsQueryKey = () => {
    
    return [`/products`] as const;
    }
  

    
export const getProductsQueryOptions = <TData = Awaited<ReturnType<typeof products>>, TError = ErrorType<ErrorResponse>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof products>>, TError, TData>, }
) => {
    
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getProductsQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof products>>> = ({ signal }) => products(signal);

      
    
      
      
   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof products>>, TError, TData> & { queryKey: QueryKey }
}

export type ProductsQueryResult = NonNullable<Awaited<ReturnType<typeof products>>>
export type ProductsQueryError = ErrorType<ErrorResponse>

export const useProducts = <TData = Awaited<ReturnType<typeof products>>, TError = ErrorType<ErrorResponse>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof products>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getProductsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const users = (
    
 signal?: AbortSignal
) => {
      
      
      return request<UsersControllerGetResponse>(
      {url: `/users`, method: 'get', signal
    },
      );
    }
  

export const getUsersQueryKey = () => {
    
    return [`/users`] as const;
    }
  

    
export const getUsersQueryOptions = <TData = Awaited<ReturnType<typeof users>>, TError = ErrorType<ErrorResponse>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof users>>, TError, TData>, }
) => {
    
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUsersQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof users>>> = ({ signal }) => users(signal);

      
    
      
      
   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof users>>, TError, TData> & { queryKey: QueryKey }
}

export type UsersQueryResult = NonNullable<Awaited<ReturnType<typeof users>>>
export type UsersQueryError = ErrorType<ErrorResponse>

export const useUsers = <TData = Awaited<ReturnType<typeof users>>, TError = ErrorType<ErrorResponse>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof users>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getUsersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


