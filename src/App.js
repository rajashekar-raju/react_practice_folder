import React from "react";
import Input from "./components/Input";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Output from "./components/Output";
import { Provider } from "react-redux";
import appStore from "./pages/appStore";
import Timer from "./components/Timer";
function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Input/>
    },
    {
      path:"/output",
      element:<Output/>
    },
    {
      path:"/timer",
      element:<Timer/>
    }
  ])

  return (
    <Provider store={appStore}>
      <div>
          <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
