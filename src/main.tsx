import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/global";
import "./index.scss";
import MainRoutes from "./routes";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 30 } },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <StrictMode>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </StrictMode>
    </GlobalProvider>
  </QueryClientProvider>
);
