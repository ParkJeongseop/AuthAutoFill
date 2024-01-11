import ReactDom from "react-dom/client";
import { Popup } from "./Popup";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Loading } from "./Loading";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

const rootElement = document.querySelector("#root");
if (rootElement === null) {
  throw new Error("Root element not found");
}
const reactRoot = ReactDom.createRoot(rootElement);

const queryClient = new QueryClient();

reactRoot.render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>
        <Popup />
      </Suspense>
    </ErrorBoundary>
  </QueryClientProvider>,
);
