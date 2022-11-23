import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { searchConditionReducer } from "./searchCondition";

const rootReducer = combineReducers({
  authStore: authReducer,
  searchConditionStore: searchConditionReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
