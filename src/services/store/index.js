import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import index from "../reducers/index"
//index in line 3 is = rootReducer / reducer
const composeEnhancers =
    ( typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) ||
    compose;

/*Middleware: hace referencia a código que existe entre dos capas de software, en el caso de express a código que este entre el request y el response. */

export const store = createStore(
    index,
    composeEnhancers( applyMiddleware( thunk ) )
)