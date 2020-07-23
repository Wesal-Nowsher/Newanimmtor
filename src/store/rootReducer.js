import { combineReducers } from "redux";
import globalReducer from "./globalState";
import sideBarReducer from '../components/sideBar/reducer'

import menuReducer from '../components/menu/reducer'
import LoginReducer from '../components/login/reducer';

import tabsReducer from "../components/tabs/reducer";

const rootReducer = combineReducers({
	main: globalReducer,
	sidebar: sideBarReducer,
	tabs: tabsReducer,
	menu:menuReducer,
	login:LoginReducer,


});

export default rootReducer;
