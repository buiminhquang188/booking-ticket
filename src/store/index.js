import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import authReducer from "containers/shared/Auth/module/reducer";
import informationReducer from "containers/client/UserInformation/module/reducer";
import adminMovieReducer from "containers/admin/Admin/MovieControl/module/reducer";
import adminUserReducer from "containers/admin/Admin/UserManagement/module/reducer";

const rootReducer = combineReducers({
    authReducer,
    informationReducer,
    adminMovieReducer,
    adminUserReducer,
});

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;