import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context/global";
import "./index.scss";
import MainRoutes from "./routes";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 30 } },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <GlobalProvider>
        <StrictMode>
          <MainRoutes />
        </StrictMode>
      </GlobalProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
