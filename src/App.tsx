import { RouterProvider } from "react-router";
import { router } from "./component/routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
