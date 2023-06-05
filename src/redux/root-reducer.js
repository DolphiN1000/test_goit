import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import usersReducer from "./users/users-slice";
import filterReducer from "./filter/filter-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};

const persistedReducer = persistReducer(persistConfig, usersReducer);

const rootReducer = combineReducers({
  users: persistedReducer,
  filter: filterReducer,
});

export default rootReducer;
