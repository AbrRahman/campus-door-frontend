import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/features/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
