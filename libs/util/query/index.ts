import { MutationCache, QueryCache, QueryClient } from "react-query";

export const queryErrorHandler = (error: any) => {
  const message = error?.data?.message || "Network failed";
  console.error(message);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      retry: 1,
      retryDelay: 3000,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
});

export default queryClient;
