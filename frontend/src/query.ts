//@ts-nocheck
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import { request } from './api/axios';
import type { ErrorType } from './api/axios';
export interface DefInterface1101610396 {
  search: string;
}

export interface DefInterface1081590390 {
  search: string;
}

export type SearchProductsControllerPostResponseItemImagesItem = {
  id: string;
  url: string;
};

export type SearchProductsControllerPostResponseItem = {
  id: string;
  name: string;
  price: number;
  images: SearchProductsControllerPostResponseItemImagesItem[];
};

export type SearchProductsControllerPostResponse = SearchProductsControllerPostResponseItem[];

export type SearchClientsControllerPostResponseItem = {
  id: number;
  name: string;
};

export type SearchClientsControllerPostResponse = SearchClientsControllerPostResponseItem[];

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


export const findClients = (
    defInterface1081590390: DefInterface1081590390,
 ) => {
      
      
      return request<SearchClientsControllerPostResponse>(
      {url: `/search/clients`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: defInterface1081590390
    },
      );
    }
  


export const getFindClientsMutationOptions = <TError = ErrorType<ErrorResponse>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof findClients>>, TError,{data: DefInterface1081590390}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof findClients>>, TError,{data: DefInterface1081590390}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof findClients>>, {data: DefInterface1081590390}> = (props) => {
          const {data} = props ?? {};

          return  findClients(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type FindClientsMutationResult = NonNullable<Awaited<ReturnType<typeof findClients>>>
    export type FindClientsMutationBody = DefInterface1081590390
    export type FindClientsMutationError = ErrorType<ErrorResponse>

    export const useFindClients = <TError = ErrorType<ErrorResponse>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof findClients>>, TError,{data: DefInterface1081590390}, TContext>, }
) => {
    
      const mutationOptions = getFindClientsMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
export const findProducts = (
    defInterface1101610396: DefInterface1101610396,
 ) => {
      
      
      return request<SearchProductsControllerPostResponse>(
      {url: `/search/products`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: defInterface1101610396
    },
      );
    }
  


export const getFindProductsMutationOptions = <TError = ErrorType<ErrorResponse>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof findProducts>>, TError,{data: DefInterface1101610396}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof findProducts>>, TError,{data: DefInterface1101610396}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof findProducts>>, {data: DefInterface1101610396}> = (props) => {
          const {data} = props ?? {};

          return  findProducts(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type FindProductsMutationResult = NonNullable<Awaited<ReturnType<typeof findProducts>>>
    export type FindProductsMutationBody = DefInterface1101610396
    export type FindProductsMutationError = ErrorType<ErrorResponse>

    export const useFindProducts = <TError = ErrorType<ErrorResponse>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof findProducts>>, TError,{data: DefInterface1101610396}, TContext>, }
) => {
    
      const mutationOptions = getFindProductsMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
