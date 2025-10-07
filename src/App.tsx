import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/features/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router}></RouterProvider>
        </PersistGate>
      </Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0891b2",
            color: "#f0f9ff",
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;
