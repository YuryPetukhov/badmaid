import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cleaningsReducer from "./reducers/CleaningsSlice";

const rootReducer = combineReducers({
  cleaningsReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
