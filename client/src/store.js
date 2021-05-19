import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = (process.env.NODE_ENV === "development") ? createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
) : createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);
export default store;

// import { applyMiddleware, createStore, } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import rootReducer from './reducers';
// import rootSaga from './sagas'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(rootSaga);
// export default store;