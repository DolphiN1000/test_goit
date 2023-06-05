import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import UserRoutes from "./UserRoutes";
import Navbar from "./modules/Navbar/Navbar";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
