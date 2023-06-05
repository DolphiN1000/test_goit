import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import UserRoutes from "./UserRoutes";
import Navbar from "./modules/Navbar/Navbar";

import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
