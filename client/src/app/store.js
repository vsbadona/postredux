// import { combineReducers, configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
// import postReducer from "../features/posts/postsSlice";
// import postSlice1 from "../features/posts/postSlice1";

// const rootReducer = combineReducers({
//   posts: postReducer,
//   posts1 : postSlice1
// });

// const persistConfig = {
//   key: "persist-store",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
//   reducer: persistedReducer,
  
//   middleware: [thunk],
// });

// export const persistor = persistStore(store);
// export default store;
