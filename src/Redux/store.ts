import {counterReducer} from "./counter-reducer";
import { combineReducers,createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {counterSettingReducer} from "./counterSetting-reducer";

const rootReducer = combineReducers({
   counterReducer,
   counterSettingReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export default store