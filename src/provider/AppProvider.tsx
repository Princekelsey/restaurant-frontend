import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ConfirmationProvider } from "../context/confirmation/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 7 * 1000,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ConfirmationProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </ConfirmationProvider>
  );
};

export default AppProvider;
