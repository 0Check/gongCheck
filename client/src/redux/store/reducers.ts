import { combineReducers } from "redux";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  authStore: authReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
